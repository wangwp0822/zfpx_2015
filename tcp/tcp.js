/**
 * Created by tianshenhudong on 2015/3/15.
 *
 * 用户可以链接
 * 提示输入 用户名
 * 可以发言 发言之后可以广播
 * 加入和退出都进行广播
 */

var net = require('net')
var util = require('util')
var clients = {};

function listenOneClient(socket){
    var username;
    socket.write('欢迎光临，请输入用户名:\r\n');
    socket.on('data',function(data) {
        if (username) {

        } else {
            if(clients[data]) {
                socket.write('用户名已经被占用，请大侠重新输入:')
            } else {
                username = data;
                clients[username] = socket;
                broadcast(username,username + '已加入聊天')
            }
        }
    })
    socket.on('close',function() {
        broadcast(username,username + '已离开聊天')
        delete clients[username];
        socket.destory();
    })
};

function broadcast(username,msg) {
    msg += '\r\n>';
    for (var client in clients) {
        if (username != client){

        }

    }
}

var server = net.createServer(listenOneClient())