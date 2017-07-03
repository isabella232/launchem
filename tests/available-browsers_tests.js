'use strict';

var expect = require('chai').expect;

var availableBrowsers = require('../lib/available-browsers');

describe('availableBrowsers', function() {
  describe('with a defined path', function() {
    it('returns a single existing path', function() {
      return availableBrowsers([{
        name: 'Test',
        possiblePath: __filename
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([{
          name: 'Test',
          exe: __filename,
          possiblePath: __filename,
          protocol: 'browser'
        }]);
      });
    });

    it('returns an array with an existing path', function() {
      return availableBrowsers([{
        name: 'Test',
        possiblePath: ['not-found', __filename, 'also-not-existing']
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([{
          name: 'Test',
          exe: __filename,
          possiblePath: ['not-found', __filename, 'also-not-existing'],
          protocol: 'browser'
        }]);
      });
    });

    it('filters a not existing path', function() {
      return availableBrowsers([{
        name: 'Test',
        possiblePath: 'not-found'
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([]);
      });
    });

    it('filters when no path exists', function() {
      return availableBrowsers([{
        name: 'Test',
        possiblePath: ['not-found', 'also-not-existing']
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([]);
      });
    });
  });

  describe('with an executable', function() {
    it('returns a single globally existing executable', function() {
      return availableBrowsers([{
        name: 'Test',
        possibleExe: 'node'
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([{
          name: 'Test',
          exe: 'node',
          possibleExe: 'node',
          protocol: 'browser'
        }]);
      });
    });

    it('returns a single locally existing executable', function() {
      return availableBrowsers([{
        name: 'Test',
        possibleExe: 'mocha'
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([{
          name: 'Test',
          exe: 'mocha',
          possibleExe: 'mocha',
          protocol: 'browser'
        }]);
      });
    });

    it('returns an array with an existing executable', function() {
      return availableBrowsers([{
        name: 'Test',
        possibleExe: ['not-found', 'node', 'also-not-existing']
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([{
          name: 'Test',
          exe: 'node',
          possibleExe: ['not-found', 'node', 'also-not-existing'],
          protocol: 'browser'
        }]);
      });
    });

    it('filters a not existing executable', function() {
      return availableBrowsers([{
        name: 'Test',
        possibleExe: 'not-found'
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([]);
      });
    });

    it('filters when no executable exists', function() {
      return availableBrowsers([{
        name: 'Test',
        possibleExe: ['not-found', 'also-not-existing']
      }]).then(function(browsers) {
        expect(browsers).to.deep.eq([]);
      });
    });
  });
});
