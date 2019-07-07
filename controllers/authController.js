var Auth = require('../models/authModel')

exports.viewSignup = function(req, res) {
    res.render('signup');
};

exports.postSignup = function(req, res) {
    console.log('req body: ', req.body)
    Auth.postSignup(req.body)
    res.render('signup');
};