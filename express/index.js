
/**
 * Created by tianshenhudong on 2015/3/21.
 */
var express = require('express');
var app = express();
app.get("/", function (req,res) {
    res.send('zfpx');
});


app.listen(3000);