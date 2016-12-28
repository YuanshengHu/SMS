/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    global.db.query(
        "select * from strategy",
        function(err,row){
            if(err) throw err
            res.render('dash/pages/m5', { title: 'Express',row:row});
        }
    )
});
router.post('/',function(req, res, next) {
    if(typeof (req.body.kk)!="undefined" && req.body.check==1) {
        global.db.query(
            "select * from strategy where time =?",
            [req.body.kk],
            function (err,row) {
                if (err) throw err
                res.write("<?xml version=\"1.0\" ?>")
                res.write("<dateback>")
                if (row.length == 0) {
                    res.write("</dateback>")
                    res.end()
                    return
                }
                var give0 = "<m1>" + row[0].s1 + "</m1>"
                var give1 = "<m2>" + row[0].s2 + "</m2>"
                var give2 = "<m3>" + row[0].s3 + "</m3>"
                res.write(give0)
                res.write(give1)
                res.write(give2)
                res.write("</dateback>")
                res.end()
            }
        )
    } else if(typeof (req.body.kk)!="undefined"){
        console.log(req.body.kk)
        global.db.query(
            "delete from strategy where time =?",
            [Number(req.body.kk)],
            function (err) {
                if (err) throw err
            }
        )
    } else {
        var s =new Date()

        global.db.query(
            "insert into strategy values(?,?,?,?,?)",
            [req.body.a0,req.body.a1,req.body.a2,req.body.a3,Date.parse(new Date())],
            function(err){
                if(err) throw err
            }
        )
    }
})
module.exports = router;