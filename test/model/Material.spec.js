/**
 * TeSS Write API
 * Create, update materials, events, packages, and workflows in TeSS.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
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
    factory(root.expect, root.TeSsWriteApi);
  }
}(this, function(expect, TeSsWriteApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TeSsWriteApi.Material();
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

  describe('Material', function() {
    it('should create an instance of Material', function() {
      // uncomment below and update the code to test Material
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be.a(TeSsWriteApi.Material);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property doi (base name: "doi")', function() {
      // uncomment below and update the code to test the property doi
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property contributors (base name: "contributors")', function() {
      // uncomment below and update the code to test the property contributors
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property authors (base name: "authors")', function() {
      // uncomment below and update the code to test the property authors
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property targetAudience (base name: "target_audience")', function() {
      // uncomment below and update the code to test the property targetAudience
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

    it('should have the property contentProviderId (base name: "content_provider_id")', function() {
      // uncomment below and update the code to test the property contentProviderId
      //var instance = new TeSsWriteApi.Material();
      //expect(instance).to.be();
    });

  });

}));