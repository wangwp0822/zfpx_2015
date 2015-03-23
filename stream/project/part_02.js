/**
 * Created by tianshenhudong on 2015/3/15.
 */
var fs = require('fs');
//对文件加密
function encode(path) {
    if(fs.existsSync(path)) {
        var stat = fs.statSync(path);
        if (stat.isFile()){
            var content = fs.readFileSync(path);
            for (var i = 0 ; i < content.length ; i ++) {
                content[i] = 255 - content[i];
            }
            var out = fs.createWriteStream(path+'_');
            out.end(content)
        }
    }
}
//encode('./1.txt');
encode('./1.txt_')