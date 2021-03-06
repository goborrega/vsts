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
    instance = new LifetimeSdk.ModuleConflict();
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

  describe('ModuleConflict', function() {
    it('should create an instance of ModuleConflict', function() {
      // uncomment below and update the code to test ModuleConflict
      //var instane = new LifetimeSdk.ModuleConflict();
      //expect(instance).to.be.a(LifetimeSdk.ModuleConflict);
    });

    it('should have the property producerModuleKey (base name: "ProducerModuleKey")', function() {
      // uncomment below and update the code to test the property producerModuleKey
      //var instane = new LifetimeSdk.ModuleConflict();
      //expect(instance).to.be();
    });

    it('should have the property consumerModuleKey (base name: "ConsumerModuleKey")', function() {
      // uncomment below and update the code to test the property consumerModuleKey
      //var instane = new LifetimeSdk.ModuleConflict();
      //expect(instance).to.be();
    });

    it('should have the property totalRequiredElements (base name: "TotalRequiredElements")', function() {
      // uncomment below and update the code to test the property totalRequiredElements
      //var instane = new LifetimeSdk.ModuleConflict();
      //expect(instance).to.be();
    });

    it('should have the property conflictType (base name: "ConflictType")', function() {
      // uncomment below and update the code to test the property conflictType
      //var instane = new LifetimeSdk.ModuleConflict();
      //expect(instance).to.be();
    });

  });

}));
