/**
 * Created by tianshenhudong on 2015/3/21.
 */
var express = require('express');
var app =express();

app.use('/coffee',function (req,res,next) {
    res.coffee = 'add water';
});

app.use('/cof')