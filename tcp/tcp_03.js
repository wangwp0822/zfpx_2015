/**
 * Created by tianshenhudong on 2015/3/15.
 */
var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./mt.txt');
var server = net.createServer({allowHallOpen:true},function(socket) {
    socket.setEncoding('utf8');
    var rs = fs.createReadStream('./msg.txt')
    rs.on('data',function(data) {
       socket.write(data);

    })
    socket.on('data',function(data){
        console.log(data+' too !')
    })

}).listen(8080)
