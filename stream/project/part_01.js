/**
 * Created by tianshenhudong on 2015/3/15.
 */
//分布读取
var fs = require('fs');
var fd = fs.openSync('./1.txt','r');
var bytesRead = 0;
var result = [];

function readPart(buf,fd) {
    return fs.readSync(fd,buf,0,16,null);
}

do {
    console.log('++++++++++++++')
    var buf = new Buffer(16);
    bytesRead = readPart(buf,fd);
    if (bytesRead < 16) {
        buf = buf.slice(0,bytesRead);
    }
    result.push(buf)
}while (bytesRead == 16);
var r = Buffer.concat(result);
console.log(r.toString())