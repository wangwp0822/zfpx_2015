/**
 * Created by tianshenhudong on 2015/3/21.
 */
module.exports.parse = parse;

function parse(str) {
    var cookieObj = {};
    if (str) {
        var vals = str.split('; ');
        for (var i = 0 ; i < vals.length ; i ++) {
            var kv = vals[i].split('=');
            cookieObj[kv[0]] = decodeURIComponent(kv[1]);
        }
    }

    return cookieObj;
}