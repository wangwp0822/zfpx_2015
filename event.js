function Event() {

}
Event.prototype.addListener = function (type,listener) {
    if(typeof listener !== 'function'){
        throw TypeError('监听器必须是一个函数');
    }

    if (!this._events){
        this._events = [];
    }
    if (this._events[type]) {
        this._events[type].push(listener);//
    } else {
        this._events[type] = [listener]; //第一次执行
    }
};

Event.prototype.emit = function(type) {
    if (!this._events) {
        this._events = {};
    }
    var handler = this._events[type];
    var arr = new Array(arguments.length - 1);
    for (var i = 1 ; i <arguments.length; i++) {
        arr[i - 1] = arguments[i];
    }
    for (var index = 0 ; index <handler.length; i++) {
        handler[index].apply(this,arr);
    }
};

function Girl () {
    var name = 'girl';
    var gotoHos = function () {

    }
};
Girl.prototype = new Event();

var min = new Girl();
console.log(min.name);
function Boy() {

}
var jiang = new Boy();
jiang.say = function (thing) {
    console.log('喜欢吗，买给' +thing +'你');
};
min.addListener('看了好久',jiang.say);
var zry = new Boy();

zry.say = function () {
    console.log('喜欢,就多看一会');
};
min.addListener('看了好久',zry.say);
min.emit('看了好久','6pplus')