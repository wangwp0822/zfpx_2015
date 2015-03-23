/**
 * Created by tianshenhudong on 2015/3/15.
 */
var dgram = require('dgram');
var util = require('util')
var  message = new Buffer('你好');
var client = dgram.createSocket('udp4');
client.send(message,0,message.length,40000,'localhost',function(err,bytes){
    if (err){
        console.log(err)
    }else{
        console.log(bytes)
    }
})

client.on('message',function(msg,rinfo) {
    console.log('收到服务器的数据%s:',msg);
    console.log(util.inspect(rinfo));
});

client.on('close',function() {
    console.log('closed');
})