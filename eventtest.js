/**
 * Created by tianshenhudong on 2015/3/14.
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Me(name){
    this.name = name;
};
util.inherits = (Me,EventEmitter);
var me = new Me();
me.addEventListener('boss',function() {
    console.log('can i help sir');
});
me.emit('boss');
me.on ('微博有新消息',function () {
    console.log('看一看吧')
});
me.emit('boss');
me.once('中午饿了',function() {
    console.log('吃午饭去了');//监听一次
});
me.emit('中午饿了');
me.removeEventListener()


