const jwt = require('jsonwebtoken');
const userDao = require('../dbs/function/userDao');
const { Op } = require('sequelize');

const { Post, User, Like } = require('../dbs/models/index');

exports.getPostById = async (req, res, next) => {
    try {
        const { username } = req.params;
        const posts = await Post.findAll({
            include: [
                {
                    model: User,
                    where: { username },
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt'],
                    },
                },

                {
                    model: Like,

                    include: [
                        {
                            model: User,
                            attributes: {
                                exclude: ['password', 'createdAt', 'updatedAt'],
                            },
                        },
                    ],
                },
            ],

            order: [['createdAt', 'DESC']],
        });
        res.status(200).json({ posts });
    } catch (err) {
        next(err);
    }
};

exports.createPost = async (req, res, next) => {
    try {
        const { caption, pictureUrl } = req.body;

        const { authorization } = req.headers;
        if (!authorization || !authorization.startsWith('Bearer')) {
            return res.status(401).json({ message: 'you are unauthenticated' });
        }

        const token = authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'you are unauthenticated' });
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const post = await Post.create({
            caption,
            pictureUrl,
            userId: payload.id,
        });

        const user = await userDao.getById(payload.id);

        const resPost = {
            ...post.toJSON(),
            User: user,
            Likes: [],
        };

        res.status(201).json({ post: resPost });
    } catch (err) {
        next(err);
    }
};
