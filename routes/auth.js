const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/authController')

router.get('/signup', auth_controller.viewSignup);

router.post('/signup', (req, res) => {   
    auth_controller.postSignup(req,res)
});

router.get('/login', auth_controller.viewLogin);

router.post('/login', (req, res) => {   
    auth_controller.postLogin(req,res)
});

module.exports = router