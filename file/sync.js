/**
 * Created by tianshenhudong on 2015/3/14.
 */
var fs = require('fs');
/*var data = fs.readFileSync('./index.html');
//console.log(data.toString());
fs.readFile('./index.html','utf8',function(err,data) {
    //if (!err) {
    //    console.error(err);
    //} else {
        console.log(data);

});*/


fs.writeFile('./write.txt','Hello Node', function (err) {
    if (err) {throw err;}else {}
    console.log('It\'s saved!');})