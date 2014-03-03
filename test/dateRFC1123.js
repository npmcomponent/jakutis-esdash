var assert = require('assert');
require('es6-shim');
var _ = require('../index.umd');

describe('dateRFC1123', function(){
    it('should return a parseable current time', function(){
        assert(Date.parse(_.dateRFC1123()) > 0);
    });
    it('should work with integers', function(){
        var date = 'Mon, 03 Mar 2014 17:48:46 GMT';
        assert.equal(date, _.dateRFC1123(Date.parse(date)));
    });
    it('should work with Date objects', function(){
        var date = 'Mon, 03 Mar 2014 17:48:46 GMT';
        assert.equal(date, _.dateRFC1123(new Date(date)));
    });
});
