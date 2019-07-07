const express = require('express');
const router = express.Router();
const authBL = require('./business_logic')

router.get('/signup', (req, res) => {    
    res.render('signup');
});

router.post('/signup', (req, res) => {    
    authBL
});


module.exports = router