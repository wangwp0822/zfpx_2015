/**
 * Created by tianshenhudong on 2015/3/15.
 */
var fs = require('fs');
var src = fs.createReadStream('./msg.txt');
var target = fs.createWriteStream('./other.txt');
target.on('open',function() {
    console.log('已经打开');
});

src.on('data',function(data) {
    target.write(data);
    target.write('\r\n分隔符\r\n')
})
src.on('end',function() {
    target.on('close',function () {
        console.log('全部写入');
        console.log('共写入%d字节',target.bytesWrite);
    })

    target.end('再见');

});