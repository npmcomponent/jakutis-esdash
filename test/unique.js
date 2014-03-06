var assert = require('assert');
require('es6-shim');
var _ = require('../index.umd');

describe('unique', function(){
    it('should return unique values in the same order', function(){
        assert.deepEqual([1, 2, 3], _.unique(1, 2, 2, 3, 1, 2));
    });
});
