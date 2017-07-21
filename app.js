var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var index = require('./routes/index');
var user = require('./routes/user');
var form = require('./routes/form');
var demo = require('./routes/demo');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('view engine', 'art');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('baayso'));
app.use(session({
    store: new RedisStore({
        host: "127.0.0.1",
        port: 6379
    }),
    resave: false, // 是否每次都重新保存会话，建议false
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    secret: 'baayso',
    cookie: {
        path: '/',
        secure: false,
        httpOnly: true,
        maxAge: 60 * 1000 * 30 // 过期时间（毫秒）
    }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', user);
app.use('/form', form);
app.use('/demo', demo);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
