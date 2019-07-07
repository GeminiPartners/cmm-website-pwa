var Auth = require('../models/authModel')

exports.viewSignup = function(req, res) {
    res.render('signup');
};

exports.postSignup = function(req, res) {
    // console.log(req)
    // Auth.postSignup(req.body.user)
    console.log(req.body)
    res.render('signup');
};