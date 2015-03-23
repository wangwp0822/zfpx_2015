/**
 * Created by tianshenhudong on 2015/3/15.
 */
var fs = require('fs');
var out= fs.createWriteStream('./msg1.txt');

out.on('error',function(err) {
    console.log(err)
});

out.write('32333');
out.end();
out.write('3873817')