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
    instance = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.SwaggerJwkCreateSet();
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

  describe('SwaggerJwkCreateSet', function() {
    it('should create an instance of SwaggerJwkCreateSet', function() {
      // uncomment below and update the code to test SwaggerJwkCreateSet
      //var instane = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.SwaggerJwkCreateSet();
      //expect(instance).to.be.a(OryHydraCloudNativeOAuth20AndOpenIdConnectServer.SwaggerJwkCreateSet);
    });

    it('should have the property body (base name: "Body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.SwaggerJwkCreateSet();
      //expect(instance).to.be();
    });

    it('should have the property set (base name: "set")', function() {
      // uncomment below and update the code to test the property set
      //var instane = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.SwaggerJwkCreateSet();
      //expect(instance).to.be();
    });

  });

}));
