

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const authBL = require('../../../auth/business_logic')

// set up the middleware
chai.use(chaiAsPromised);

var should = require('chai').should() 


function deleteUser(user) {
    const rp = require("request-promise-native");
    const userDeleteURL = process.env.API_URL + '/user/delete'
    return rp
    .post({
        "url": userDeleteURL,
        "headers": {
            "content-type": "application/json",
            "origin": process.env.ORIGIN_URL,
            "withCredentials": true,
            "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpc19hY3RpdmUiOnRydWV9.5JDonHbqo4BOlF_paiFysBpAmDJ_pDTu0akI3DCuh0s"
        },
        "body": JSON.stringify(user)        
    }



describe('Integration: signup', function() {
    context('Create new user - business logic', function() {  
        
        const user = {
            email: "testEMail@test.com",
            username: "testUser01",
            password: "123456",
            location: "NC"
        }   
        //Clean up the user after the test           
        after(function() {
            const rp = require("request-promise-native");
            const userDeleteURL = process.env.API_URL + '/user/delete'
            return rp
            .post({
                "url": userDeleteURL,
                "headers": {
                    "content-type": "application/json",
                    "origin": process.env.ORIGIN_URL,
                    "withCredentials": true,
                    "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpc19hY3RpdmUiOnRydWV9.5JDonHbqo4BOlF_paiFysBpAmDJ_pDTu0akI3DCuh0s"
                },
                "body": JSON.stringify(user)        
            })
            .then(response => {
                console.log('we deleted the record',response)
                return response
            })
            .catch(error => {
                return(error)
            })
        })        
        it('should return a success message', function() {
            return authBL.postSignup(user).should.eventually.include('"message":"post"')
        });  
    });  
    context('Attempt to create user w/ existing email - business logic', function() {  
        const user = {
            email: "hello@hello.com",
            username: "test22",
            password: "123456",
            location: "NC"
        }        
        it('should return a failure message', function() {
            return authBL.postSignup(user).should.eventually.include('"message":"Email in use"')
        });  
    });    
});



// describe('Start erver', function() {
//     context('Dev port is found', function() {        
//         const expectedResult = true;
//         function getResult () {
//             return Server.PWA_PORT
//         }
//         it('should return a port', function() {
//             getResult().should.not.equal('')
//         });  
//     });  
  
// });


