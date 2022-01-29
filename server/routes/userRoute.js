const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = passport.authenticate('jwt-auth', { session: false });

router.get('/:username', auth, userController.getUserByUsername);
router.get('/all/:id', auth, userController.getAllUser);

module.exports = router;
