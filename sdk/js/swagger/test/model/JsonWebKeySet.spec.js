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
    instance = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.JsonWebKeySet();
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

  describe('JsonWebKeySet', function() {
    it('should create an instance of JsonWebKeySet', function() {
      // uncomment below and update the code to test JsonWebKeySet
      //var instane = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.JsonWebKeySet();
      //expect(instance).to.be.a(OryHydraCloudNativeOAuth20AndOpenIdConnectServer.JsonWebKeySet);
    });

    it('should have the property keys (base name: "keys")', function() {
      // uncomment below and update the code to test the property keys
      //var instane = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.JsonWebKeySet();
      //expect(instance).to.be();
    });

  });

}));
