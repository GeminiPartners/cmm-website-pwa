const rp = require("request-promise-native");

function postSignup(user) {
    const signupURL = process.env.API_URL + '/auth/signup'
    return rp
        .post({
            "url": signupURL,
            "headers": {
                "content-type": "application/json",
                "origin": process.env.ORIGIN_URL,
                "withCredentials": true
            },
            "body": JSON.stringify(user)
    
        })
        .then(response => {
            console.log(response)
            return response
        })
        .catch(error => {
            return(resError(error, 401, 'Signup failed'))
        })
        
}

function postLogin(user) {
    const loginURL = process.env.API_URL + '/auth/login'
    return rp
        .post({
            "url": loginURL,
            "headers": {
                "content-type": "application/json",
                "origin": process.env.ORIGIN_URL,
                "withCredentials": true
            },
            "body": JSON.stringify(user)
    
        })
        .then(response => {
            console.log(response)
            return response
        })
        .catch(error => {
            return(resError(error, 401, 'Login failed'))
        })
        
}

function resError(res, statusCode, message) {
    res.status(statusCode);
    res.json({message});
}

module.exports = {
    postSignup,
    postLogin
}