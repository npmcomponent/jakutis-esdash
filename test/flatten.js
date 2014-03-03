var assert = require('assert');
require('es6-shim');
var _ = require('../index.umd');

describe('flatten', function(){
    it('should return same flat array as provided', function(){
        var array = [1, 2, 3];
        assert.deepEqual(array, _.flatten(array));
    });
    it('should flatten 2 levels deep', function(){
        assert.deepEqual([1, 2, 3], _.flatten([1, [2], 3]));
    });
    it('should flatten 0 levels deep', function(){
        assert.deepEqual([1, 2, 3], _.flatten(1, 2, 3));
    });
    it('should work with multiple arguments', function(){
        assert.deepEqual([1, 2, 3], _.flatten(1, [2], 3));
    });
})
