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
            "set-Cookie":["name=" +encodeURIComponent('珠峰')+";path=/read1"+",age=6;path=/read2"],
            "maxAge":3, //单位为秒
            "expire":100*1000 ,//单位是毫秒
           "httpOnly":true //可以在浏览器中的js的可以篡写(document.cookie)

        })
        res.end('OK');
    } else {
        var cookie = req.headers.cookie;
        res.writeHead(200,{"content-Type":"text-html;charset=utf-8"})
        res.end(cookie);
    }
});