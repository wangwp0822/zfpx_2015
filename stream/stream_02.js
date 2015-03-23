/**
 * Created by tianshenhudong on 2015/3/15.
 */
var fs = require('fs');
var out = fs.createReadStream('./msg.txt');
//data 流模式
//readable非流模式

var bower = [];
out.on('readable',function () {
    var spoon;//小勺
    //这一步特别重要先放在64k的小容器里，
    while(null != (spoon = out.read(10))) {
        bower.push(spoon);
    }

}).on('end',function() {
    var b = Buffer.concat(bower);
    console.log(bower.toString());
});

