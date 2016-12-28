var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
/* GET home page. */
router.get('/',function(req,res){
    res.render('dash/pages/m12',{title:'Express'})
})
router.post('/', function(req, res, next) {
  var arg1 = req.body.support
  var arg2 = req.body.confidence
    var left = new Array()
    var right = new Array()
  exec('python ~/project1/routes/analyze/me.py '+ arg1+' '+arg2+' ',function(error,stdout,stderr){
    if(stdout.length >1){
        var data = JSON.parse(stdout)
        for(var i in data){
            var kk = i.split("->")
            left.push(kk[0].split('^'))
            right.push(kk[1].split('^'))
        }
        res.render('dash/pages/m12', { title: 'Express',left:left,right:right});
    } else {
        console.log('you don\'t offer args');
    }
    if(error) {
        console.info('stderr : '+stderr);
    }
  })
});
module.exports = router;