const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const JWT_SECRET = process.env.JWT_SECRET;

var Auth = require('../models/authModel')

exports.viewSignup = function(req, res) {
    res.render('signup');
};

exports.postSignup = function(req, res) {
    console.log('req body: ', req.body)
    Auth.postSignup(req.body)
    res.render('signup');
};

exports.viewLogin = function(req, res) {
    res.render('login');
};

exports.postLogin = function(req, res) {
    Auth
        .postLogin(req.body)
        .then((result) => {
            // If the passwords matched
            if(result) {
                // setting the 'set-cookie header
                res.clearCookie('my_token'); 
                console.log('result from here', JSON.parse(result).token)                                           
                const isSecure = req.app.get('env') !='development';
                res.cookie('auth_token', JSON.parse(result).token, {
                    httpOnly: true,
                    secure: isSecure,
                    signed: false
                });               
                return res
            } else {
                next(new Error('Invalid login3'));
            }
        })
        .then((res) => {
            return res.render('login')
        });
    
};