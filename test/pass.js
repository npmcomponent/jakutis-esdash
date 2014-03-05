var assert = require('assert');
require('es6-shim');
var _ = require('../index.umd');

describe('pass', function(){
    it('should return the passed value', function(){
        var value = {};
        assert.equal(value, _.pass(value));
    });
});
