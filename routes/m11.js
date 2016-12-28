/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('dash/pages/m11', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    var arg1= req.body.get
    exec('python ~/project1/routes/analyze/me2.py '+ arg1+' ',function(error,stdout,stderr){
        if(stdout.length >1){
            var arr = [
                "John",
                "Kim",
                "Mary",
                "Michelle",
                "James",
                "Maria",
                "Michael",
                "David",
                "Sunny",
                "James",
                "Crystal",
                "Peter",
                "Jennife",
                "George",
                "Rache",
                "Lisa",
                "Daniel",
                "Elizabeth",
                "Emily",
                "Kevin",
                "Charles",
                "Eva",
                "Jason",
                "Alice",
                "Mark",
                "Jenny",
                "Eric",
                "Candy",
                "Linda",
                "Jack",
                "haha",
            ]
            try{
                var data = JSON.parse(stdout)
            }
            catch(e){
                res.render('dash/pages/m11', { title: 'Express'})
                return
            }
            console.log("here")
            var tmp1 = new Array()
            for(var i=0;i<data.length;i++){
                tmp1.push(data[i])
                tmp1.push(arr[i])
            }
            console.log("xixi")
            console.log(tmp1)
            console.log(arg1)
            res.render('dash/pages/m11', { title: 'Express',tmp1:tmp1,num:arg1 })
        } else {
            res.render('dash/pages/m11', { title: 'Express' })
        }
        if(error) {
            res.render('dash/pages/m11', { title: 'Express' })
        }
    })
});

module.exports = router;