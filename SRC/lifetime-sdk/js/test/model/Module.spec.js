/**
 * v1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    factory(root.expect, root.LifetimeSdk);
  }
}(this, function(expect, LifetimeSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LifetimeSdk.Module();
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

  describe('Module', function() {
    it('should create an instance of Module', function() {
      // uncomment below and update the code to test Module
      //var instane = new LifetimeSdk.Module();
      //expect(instance).to.be.a(LifetimeSdk.Module);
    });

    it('should have the property key (base name: "Key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new LifetimeSdk.Module();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LifetimeSdk.Module();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new LifetimeSdk.Module();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "Kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instane = new LifetimeSdk.Module();
      //expect(instance).to.be();
    });

    it('should have the property moduleStatusInEnv (base name: "ModuleStatusInEnv")', function() {
      // uncomment below and update the code to test the property moduleStatusInEnv
      //var instane = new LifetimeSdk.Module();
      //expect(instance).to.be();
    });

  });

}));
