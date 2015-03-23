/**
 * Created by tianshenhudong on 2015/3/15.
 *
 * 创建服务器
 * createServer
 * var socket = dgram.createSocket(type,callback)
 */
//绑定服务器地址
//socket.bind(port,address,callback);

//相互通信
//socket.send(buf,offset,length,port,address,callback(err,bytes))
var dgram = require('dgram');
var util = require('util')

var server = dgram.createSocket('udp4',function(msg,rinfo) {
    console.log(util.inspect(rinfo));
    console.log('received'+msg);
    var buf = new Buffer('服务器收到:' + msg)
    server.send(buf, 0, buf.length,rinfo.port,rinfo.address)
});

server.bind(40000,'localhost')