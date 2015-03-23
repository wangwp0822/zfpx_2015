/**
 * Created by tianshenhudong on 2015/3/21.
 */
//1、cookie是什么，能干什么

var url = require('url');
var http = require('http');

var server = http.createServer(function (req,res) {
    var urlObj = url.parse(req,url);
    if ('/favicon.ico' == urlObj.pathname) {
        res.writeHead(404);
        res.end(http.STATUS_CODES[404])
    } else if ('/write' == urlObj.pathname) {
        res.writeHead(200, {
            "content-Type":"text-html;charset=utf-8",
            "set-Cookie":"name=" +encodeURIComponent('珠峰')
        })
        res.end('OK');
    } else {
        var cookie = req.headers.cookie;
        res.writeHead(200,{"content-Type":"text-html;charset=utf-8"})
        res.end(cookie);
    }
});