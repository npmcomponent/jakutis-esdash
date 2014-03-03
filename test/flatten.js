var assert = require('assert');
require('es6-shim');
var _ = require('../index.umd');

describe('flatten', function(){
    it('should return same flat array as provided', function(){
        var array = [1, 2, 3];
        assert.deepEqual(array, _.flatten(array));
    })
})
