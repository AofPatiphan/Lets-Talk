const express = require('express');
const authRoute = require('./routes/authRoute');
const uploadRoute = require('./routes/uploadRoute');
const postRoute = require('./routes/postRoute');
const userRoute = require('./routes/userRoute');

require('dotenv').config();
require('./middlewares/passport');

// // // Create Table
// const { sequelize } = require('./dbs/models/index');
// sequelize.sync({ force: true });

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(
    express.urlencoded({
        limit: '50mb',
        extended: true,
    })
);

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/upload', uploadRoute);
app.use('/post', postRoute);

// Error handling
app.use((req, res, next) => {
    res.status(404).json({ message: 'resource not found on this server' });
});

app.use((err, req, res, next) => {
    console.log(err);
    let code = 500;
    if (err.name === 'JsonWebTokenError') {
        code = 401;
    }
    if (err.name === 'TokenExpiredError') {
        code = 401;
    }
    if (process.env.NODE_ENV === 'development') {
        res.status(code).json({ message: err.message });
    } else {
        res.status(code.json({ message: 'something wrong' }));
    }
});

const jwt = require('jsonwebtoken');
const http = require('http'); //setup socket.io
const db = require('./dbs/models');
const server = http.createServer(app);

server.listen(5555, () => console.log('server run on port 5555'));
