const Server = require('../../app');
console.log (Server.PWA_PORT)
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

// set up the middleware
chai.use(chaiAsPromised);

var should = require('chai').should() 



describe('Unit: Start server', function() {
    context('Dev port is found', function() {        
        const expectedResult = true;
        function getResult () {
            return Server.PWA_PORT
        }
        it('should return a port', function() {
            getResult().should.not.equal('')
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

