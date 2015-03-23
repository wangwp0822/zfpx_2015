/**
 * Created by tianshenhudong on 2015/3/15.
 */
var fs = require('fs');
var out = fs.createReadStream('./msg.txt',{start:3,end:6});
out.on('open',function (){
    console.log('file opened');
});

out.pause();//暂停读取
setTimeout(function() {
    out.resume();//回复读
},5000);

out.on('data',function(data) {
    console.log('数据读取到：'+data);
});

out.on('end',function () {
    console.log("读取完成")
});
out.on('close',function() {
    console.log('文件关闭')
});

