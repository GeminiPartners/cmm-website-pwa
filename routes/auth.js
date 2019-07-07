const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/authController')

router.get('/signup', auth_controller.viewSignup);

router.post('/signup', (req, res) => {   
    console.log('request: ', req.body)
    auth_controller.postSignup(req,res)
});


module.exports = router