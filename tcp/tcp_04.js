/**
 * Created by tianshenhudong on 2015/3/15.
 */
var net = require('net');
var util = require('util');
var fs = require('fs');
var socket = new net.Socket({allowHallOpen:true});
socket.setEncoding('utf8');
socket.connect(8080,'192.168.0.104',function() {
    console.log(util.inspect(socket));
    socket.write('hi server');
    setTimeout(function () {
        socket.end('bye bye')
    },10000)
});

socket.on('error',function() {
    console.log(err);
    socket.destory();
});

socket.on('end',function() {
    console.log('客户端关闭连接')
})
socket.on('data',function() {
    console.log('服务器说:'+data);
})
//allowHallOpen:true:客户端想断开连接，服务器不允许关系