/**
 * Created by tianshenhudong on 2015/3/22.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189:27017/wangwp_blog');
module.exports = mongoose;