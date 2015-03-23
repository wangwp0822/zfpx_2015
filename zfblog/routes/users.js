var express = require('express');
var crypto = require('crypto');
var User = require('../model/User')
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
 res.render('user/reg',{
     title:"欢迎注册！"
 });
});

router.post('/reg',function(req,res,next) {
    var username = req.body.username;
    var password = req.body.password;
    var password_repeat = req.body['re_password'];
    if(!username) {
        req.flash("error","用户名不能为空！")
        return res.redirect('back');
    }
    if (!password || !password_repeat || password != password_repeat) {
        req.flash('error','两次输入的密码不一致，请重新输入');
        return res.redirect('back');
    }
    var md5 = crypto.createHash('md5');
    var password = md5.update(password).digest('hex');
    var newUser = new User({
        username:username,
        password:password,
        email:req.body.email
    });
    User.get(username,function(err,user){
        if(err) {
            req.flash('error','查詢出錯')
        }else {
            if (user) {
                req.flash('error',"用户已存在，请重新注册")
                res.redirect('back');
            } else {
                newUser.save(function(err,user) {
                    if(err) {
                        req.flash('error','註冊失敗')
                        res.redirect('back');
                    } else {
                        req.session.user = user;
                        req.flash('success',"註冊成功");
                        res.redirect('/');
                    }
                })
            }

        }
    })

});
router.get('/login', function(req, res, next) {
    res.render('user/login',{
        title:"欢迎登录！"
    });
});

router.post('/login',function(req,res,next) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(password).digest('hex');
    User.get(req.body.user,function(err,user) {
        if(err) {
            req.flash('error','查詢出錯')
        }else {
            if (user) {
                if (user.password != password) {
                    req.flash('error',"密码不一致")
                    res.redirect('back');
                } else {
                    req.session.user = user;
                    req.flash('success',"註冊成功");
                    res.redirect('/');
                }
            }else {
                req.flash('error','用户不存在');
                res.redirect('back');
            }
        }
    })
});
router.get('/logout', function(req, res, next) {
    req.session.user = null;
    req.flash('success','退出成功');
    res.redirect('/');
});



module.exports = router;
