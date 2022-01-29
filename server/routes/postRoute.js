const express = require('express');
const passport = require('passport');

const router = express.Router();
const postController = require('../controllers/postController');
const auth = passport.authenticate('jwt-auth', { session: false });

router.get('/:username', auth, postController.getPostById);
router.post('/', auth, postController.createPost);

module.exports = router;
