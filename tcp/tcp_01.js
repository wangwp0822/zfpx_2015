/**
 * Created by tianshenhudong on 2015/3/15.
 */
var net = require('net');
var server = net.createServer(function(socket) {
    console.log(socket.address());
    server.getConnections(function(err,count){
        console.log('现在一共有' +count +'连上了！')
    });

    socket.setEncoding('utf8');
    socket.pause();
    var t = setTimeout(function() {
        socket.resume();
        socket.pipe(out,{end:false});
    },5000);
    socket.on('data',function(chunk) {
        socket.pause();
        t.ref();

    });
    socket.setTimeout(10*1000);
    socket.on('timeout',function() {
        socket.resume();
        socket.pipe(out,{end:false});
    });
    socket.on('end',function() {
        console.log('客户端断开连接')
    })

    socket.on('close',function () {
        console.log('客户端退出')
    })

    socket.pip(out,{end:false});
    setTimeout(function () {
        socket.unpip(out);
    },5000);//写5秒内的数据

    socket.on('data',function() {

    })
}).listen(8080,'0.0.0.0',515,function () {
    console.log('start listen' + util.inspect(server.address()))
});

/*
setTimeout(function () {
    server.close();
},10000);
*/

server.on('close',function () {
    console.log('server is close');
});