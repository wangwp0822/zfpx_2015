/**
 * Created by tianshenhudong on 2015/3/14.
 */
var buf1 = new Buffer(12);
buf1.fill(1);
console.log(buf1);

var buf2 = new Buffer([1,2,3]);
console.log(buf2);

var buf3 = new Buffer("珠峰培训",'utf8');
console.log(buf3);

var buf4 = new Buffer(1);
console.log(buf4[0]);

var sum = 0;
for (var i = 0 ; i < 8; i++) {
    sum += Math.pow(2,i);
};
console.log(sum);

var buf = new Buffer("珠峰培训");
/*
console.log(buf);
buf.fill(32,0,3);
console.log(buf);
*/

buf.write("学院",6);
console.log(buf.toString())
