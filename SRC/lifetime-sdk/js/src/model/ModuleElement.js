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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LifetimeSdk) {
      root.LifetimeSdk = {};
    }
    root.LifetimeSdk.ModuleElement = factory(root.LifetimeSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModuleElement model module.
   * @module model/ModuleElement
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ModuleElement</code>.
   * Element version information, such as action, entity, structure, among others.
   * @alias module:model/ModuleElement
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ModuleElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModuleElement} obj Optional instance to populate.
   * @return {module:model/ModuleElement} The populated <code>ModuleElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('ElementType')) {
        obj['ElementType'] = ApiClient.convertToType(data['ElementType'], 'String');
      }
      if (data.hasOwnProperty('CompatibilitySignatureHash')) {
        obj['CompatibilitySignatureHash'] = ApiClient.convertToType(data['CompatibilitySignatureHash'], 'String');
      }
      if (data.hasOwnProperty('FullSignatureHash')) {
        obj['FullSignatureHash'] = ApiClient.convertToType(data['FullSignatureHash'], 'String');
      }
      if (data.hasOwnProperty('ModuleKey')) {
        obj['ModuleKey'] = ApiClient.convertToType(data['ModuleKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * Module element unique identifier.
   * @member {String} Key
   * @default ''
   */
  exports.prototype['Key'] = '';
  /**
   * Name of the element as specified by the developer.
   * @member {String} Name
   * @default ''
   */
  exports.prototype['Name'] = '';
  /**
   * Type of the element, such as action, entity, structure.
   * @member {String} ElementType
   * @default ''
   */
  exports.prototype['ElementType'] = '';
  /**
   * Hash of the element signature. Can be used to validate if the element version is compatible with another version, not producing a broken reference).
   * @member {String} CompatibilitySignatureHash
   * @default ''
   */
  exports.prototype['CompatibilitySignatureHash'] = '';
  /**
   * Hash of the element. Can be used to uniquely identify an element version.
   * @member {String} FullSignatureHash
   * @default ''
   */
  exports.prototype['FullSignatureHash'] = '';
  /**
   * Unique identifier of the module where the element is publicly supplied, among others.
   * @member {String} ModuleKey
   * @default ''
   */
  exports.prototype['ModuleKey'] = '';



  return exports;
}));

