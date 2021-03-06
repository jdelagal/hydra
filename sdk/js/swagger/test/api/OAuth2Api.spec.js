/**
 * ORY Hydra - Cloud Native OAuth 2.0 and OpenID Connect Server
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here. Keep in mind that this document reflects the latest branch, always. Support for versioned documentation is coming in the future.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer);
  }
}(this, function(expect, OryHydraCloudNativeOAuth20AndOpenIdConnectServer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.OAuth2Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OAuth2Api', function() {
    describe('acceptConsentRequest', function() {
      it('should call acceptConsentRequest successfully', function(done) {
        //uncomment below and update the code to test acceptConsentRequest
        //instance.acceptConsentRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('acceptLoginRequest', function() {
      it('should call acceptLoginRequest successfully', function(done) {
        //uncomment below and update the code to test acceptLoginRequest
        //instance.acceptLoginRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOAuth2Client', function() {
      it('should call createOAuth2Client successfully', function(done) {
        //uncomment below and update the code to test createOAuth2Client
        //instance.createOAuth2Client(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOAuth2Client', function() {
      it('should call deleteOAuth2Client successfully', function(done) {
        //uncomment below and update the code to test deleteOAuth2Client
        //instance.deleteOAuth2Client(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('flushInactiveOAuth2Tokens', function() {
      it('should call flushInactiveOAuth2Tokens successfully', function(done) {
        //uncomment below and update the code to test flushInactiveOAuth2Tokens
        //instance.flushInactiveOAuth2Tokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConsentRequest', function() {
      it('should call getConsentRequest successfully', function(done) {
        //uncomment below and update the code to test getConsentRequest
        //instance.getConsentRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoginRequest', function() {
      it('should call getLoginRequest successfully', function(done) {
        //uncomment below and update the code to test getLoginRequest
        //instance.getLoginRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOAuth2Client', function() {
      it('should call getOAuth2Client successfully', function(done) {
        //uncomment below and update the code to test getOAuth2Client
        //instance.getOAuth2Client(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWellKnown', function() {
      it('should call getWellKnown successfully', function(done) {
        //uncomment below and update the code to test getWellKnown
        //instance.getWellKnown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('introspectOAuth2Token', function() {
      it('should call introspectOAuth2Token successfully', function(done) {
        //uncomment below and update the code to test introspectOAuth2Token
        //instance.introspectOAuth2Token(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOAuth2Clients', function() {
      it('should call listOAuth2Clients successfully', function(done) {
        //uncomment below and update the code to test listOAuth2Clients
        //instance.listOAuth2Clients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oauthAuth', function() {
      it('should call oauthAuth successfully', function(done) {
        //uncomment below and update the code to test oauthAuth
        //instance.oauthAuth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oauthToken', function() {
      it('should call oauthToken successfully', function(done) {
        //uncomment below and update the code to test oauthToken
        //instance.oauthToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rejectConsentRequest', function() {
      it('should call rejectConsentRequest successfully', function(done) {
        //uncomment below and update the code to test rejectConsentRequest
        //instance.rejectConsentRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rejectLoginRequest', function() {
      it('should call rejectLoginRequest successfully', function(done) {
        //uncomment below and update the code to test rejectLoginRequest
        //instance.rejectLoginRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('revokeOAuth2Token', function() {
      it('should call revokeOAuth2Token successfully', function(done) {
        //uncomment below and update the code to test revokeOAuth2Token
        //instance.revokeOAuth2Token(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOAuth2Client', function() {
      it('should call updateOAuth2Client successfully', function(done) {
        //uncomment below and update the code to test updateOAuth2Client
        //instance.updateOAuth2Client(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userinfo', function() {
      it('should call userinfo successfully', function(done) {
        //uncomment below and update the code to test userinfo
        //instance.userinfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('wellKnown', function() {
      it('should call wellKnown successfully', function(done) {
        //uncomment below and update the code to test wellKnown
        //instance.wellKnown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
