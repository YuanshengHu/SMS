var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mysql = require("mysql");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session")

var routes = require('./routes/index');
var managers = require('./routes/managers');
var users = require('./routes/users');
var checker = require('./routes/checker');
var customer = require('./routes/customer');
var storage = require('./routes/storage')
var casher = require('./routes/casher')
var managers3 = require('./routes/managers3')
var m11=require('./routes/m11')
var m12=require('./routes/analyze')
var m2=require('./routes/m2')
var m4=require('./routes/m4')
var m5=require('./routes/m5')
var s2=require('./routes/s2')
var c1=require('./routes/c1')
var m6=require('./routes/m6')
var m7=require('./routes/m7')

var db = mysql.createConnection({
    user: 'root',
    password: 'tianli1',
    database:'MySQL',
})
////////测试数据挖掘表
db.query(
    "CREATE TABLE IF NOT EXISTS aprioritemp("
    + "mykey INT NOT NULL auto_increment,"
    + "people INT,"
    + "goods INT,"
    + "PRIMARY KEY(mykey))",
    function(err){
      if(err) throw err;
      console.log('aprioritemp ok');
    }
);
////////购买记录表
db.query(
    "CREATE TABLE IF NOT EXISTS buyrecord("
    +"cus BIGINT,"
    +"goods VARCHAR(100),"
    +"count INT,"
    +"time BIGINT)",
    function(err){
        if(err) throw err;
        console.log('goods ok');
    }
);
/////////员工表
db.query(
    "CREATE TABLE IF NOT EXISTS hr("
    +"id INT,"
    +"name VARCHAR(50),"
    +"gender VARCHAR(10),"
    +"rank VARCHAR(20),"
    +"positon VARCHAR(50),"
    +"sid INT,"
    +"salary INT,"
    +"note LONGTEXT,"
    +"absence INT)",
    function(err){
        if(err) throw err;
        console.log('hr ok');
    }
)

db.query(
    "CREATE TABLE IF NOT EXISTS goods("
    +"name VARCHAR(50),"
    +"kind VARCHAR(50),"
    +"prince INT,"
    +"cost INT,"
    +"stock INT,"
    +"profit INT,"
    +"rate FLOAT)",
    function(err){
        if(err) throw err;
        console.log('buyrecord ok');
    }
)

db.query(
    "CREATE TABLE IF NOT EXISTS storage("
    +"type VARCHAR(10),"
    +"goods VARCHAR(50),"
    +"amount INT,"
    +"supplier VARCHAR(10),"
    +"price INT,"
    +"time BIGINT)",
    function (err) {
        if(err) throw err
        console.log('storage ok')
    }
)

db.query(
    "CREATE TABLE IF NOT EXISTS strategy("
    +"type VARCHAR(20),"
    +"s1 VARCHAR(100),"
    +"s2 VARCHAR(100),"
    +"s3 LONGTEXT,"
    +"time BIGINT)",
    function (err) {
        if(err) throw err
        console.log('strategy ok')
    }
)

db.query(
    "CREATE TABLE IF NOT EXISTS site("
    +"id INT,"
    +"adds VARCHAR(300),"
    +"tele VARCHAR(100))",
    function(err){
        if(err) throw err
    }
)

db.query(
    "CREATE TABLE IF NOT EXISTS member("
    +"id INT,"
    +"name VARCHAR(30),"
    +"level INT,"
    +"tele VARCHAR(30),"
    +"due VARCHAR(30))",
    function (err) {
        if(err) throw err
        console.log('ok')
    }
)

db.query(
    "CREATE TABLE IF NOT EXISTS usr("
    +"name VARCHAR(30),"
    +"pass VARCHAR(30),"
    +"ss VARCHAR(10))",
    function (err) {
        if(err) throw err
        console.log('member ok')
    }
)

db.query(
    "CREATE TABLE IF NOT EXISTS bill("
    +"event VARCHAR(20),"
    +"amount INT,"
    +"time VARCHAR(20))",
    function (err) {
        if(err) throw err
        console.log('member ok')
    }
)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized:false,
    secret:"keyboard cat"
}))
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/managers',managers);
app.use('/checker',checker);
app.use('/customer',customer);
app.use('/storage',storage);
app.use('/casher',casher);
app.use('/managers3',managers3);
app.use('/m11', m11);
app.use('/m12', m12);
app.use('/m2', m2);
app.use('/m4', m4);
app.use('/m5', m5);
app.use('/s2',s2)
app.use('/c1',c1)
app.use('/m6',m6)
app.use('/m7',m7)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
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

global.db = db;
module.exports = app;
