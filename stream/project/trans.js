/**
 * Created by tianshenhudong on 2015/3/15.
 */
var fs = require('fs');
var path = require('path');
//深度遍历文件
function deep (dir) {
    console.log(dir);
    var stat = fs.statSync(dir);
    if (stat.isDirectory()) {
        var files = fs.readdirSync(dir);
        for (var i = 0 ; i < files.length; i ++) {
            deep(path.join(dir,files[i]));
        }
    }
}
deep('a');
//广度遍历
function wide(dir){
    console.log(dir);


}