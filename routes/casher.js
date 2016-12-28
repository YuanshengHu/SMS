/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('dash/pages/casherblank', { title: 'Express' });
});
router.post('/',function(req,res){
    if(typeof (req.body.tag)!="undefined"){
        var t = (new Date().toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "))
        global.db.query(
            "insert into bill values(?,?,?)",
            ["customer-buy",Number(req.body.tag),t],
            function(err){
                if(err) throw err
            }
        )
        return
    }
    global.db.query(
        "select * from goods where name=?",[req.body.data1],
        function(err,row){
            if(err) throw  err
            res.write("<?xml version=\"1.0\" ?>")
            res.write("<dateback>")
            if (row.length == 0) {
                res.write("</dateback>")
                res.end()
                return
            }
            console.log(row[0].prince)
            var give1 = "<m2>" + row[0].prince+ "</m2>"
            res.write(give1)
            res.write("</dateback>")
            res.end()
        }
    )
})
module.exports = router;