/**
 * Created by tianshenhudong on 2015/3/14.
 */
var repl = require('repl');
var server = repl.start({});
var con = server.context;
con.name = 'zfpx';
con.age = 5;
con.grow = function() {
    return con.age++;
};



