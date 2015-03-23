/**
 * Created by tianshenhudong on 2015/3/15.
 */
var fs = require('fs');
var out = fs.createWriteStream('./test.txt');
for (var i = 0 ; i < 10000 ; i ++) {
    var flag = out.write(i.toString());
    //flag==true,是写到了      系统缓存区
    //flag==false时，是写到了   内存队列
    console.log(flag +"------"+ i);
};

out.on('drain',function () {
    console.log('系统缓存区的数据已被全部输出')
})
