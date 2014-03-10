var assert = require('assert');
require('es6-shim');
var _ = require('../index.umd');

describe('undefined', function(){
    it('should be undefined', function(){
        var value;
        assert.equal(value, _.undefined);
    });
});
