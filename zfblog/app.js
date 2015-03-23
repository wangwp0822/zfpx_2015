var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');//收藏图片的中间件
var logger = require('morgan');//日志中间件
var cookieParser = require('cookie-parser');//解析cookie
var bodyParser = require('body-parser');//解析body的数据
var session = require('express-session');
var flash = require('connect-flash');
var routes = require('./routes/index');//首页
var users = require('./routes/users');//用户信息
var article = require('./routes/article');//文章

var app = express();
app.use(session({
    secret:'zfblog',
    resave:false,
    saveUninitialized:false
}));
app.use(flash());
// view engine setup
app.set('views', path.join(__dirname, 'views'));//__dirname 当前目录
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); //解析cookie
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req,res,next) {

    res.locals.error=req.flash('error').toString()|| "";
    res.locals.success=req.flash('success').toString() || "";
    res.locals.title="welcome";

    next();
})


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
//捕获异常
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
//错误处理函数，的特点（第一个参数是err）
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
      //render 渲染模板
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
