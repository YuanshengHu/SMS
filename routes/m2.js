/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('dash/pages/m2', { title: 'Express' });
});

router.post('/',function(req, res, next) {
        if(typeof(req.body.name)!=undefined){
            global.db.query(
                "select * from hr where name=?",
                [req.body.name],
                function s(err,row){
                    if(err) throw err
                    res.write("<?xml version=\"1.0\" ?>")
                    res.write("<dateback>")
                    if(row.length==0){
                        res.write("</dateback>")
                        res.end()
                        return
                    }
                    console.log(row[0].name)
                    var give0 = "<id>" + row[0].id + "</id>"
                    var give1 ="<name>"+row[0].name+"</name>"
                    var give2 ="<gen>"+row[0].gender+"</gen>"
                    var give3 ="<rank>"+row[0].rank+"</rank>"
                    var give4 ="<po>"+row[0].positon+"</po>"
                    var give5 = "<sid>"+row[0].sid+"</sid>"
                    var give6 = "<sa>"+row[0].salary+"</sa>"
                    var give7 = "<note>"+row[0].note+"</note>"
                    var give8 = "<ab>"+row[0].absence+"</ab>"
                    res.write(give0)
                    res.write(give1)
                    res.write(give2)
                    res.write(give3)
                    res.write(give4)
                    res.write(give5)
                    res.write(give6)
                    res.write(give7)
                    res.write(give8)
                    res.write("</dateback>")
                    res.end()
                })
        }
        if(typeof (req.body.changesa)!=undefined){
            global.db.query(
                "update hr set salary=? where name=?",
                [req.body.changenum,req.body.changesa],
                function s(err){
                    if(err) throw err
                }
            )
        }
        if(typeof (req.body.changepo)!=undefined){
            global.db.query(
                "update hr set positon=? where name=?",
                [req.body.changenum,req.body.changepo],
                function s(err){
                    if(err) throw err
                }
            )
        }
        if(typeof (req.body.changesu)!=undefined){
            global.db.query(
                "update hr set sid=? where name=?",
                [req.body.changenum,req.body.changesu],
                function s(err){
                    if(err) throw err
                }
            )
        }
        if(typeof (req.body.changera)!=undefined){
            global.db.query(
                "update hr set rank=? where name=?",
                [req.body.changenum,req.body.changera],
                function s(err){
                    if(err) throw err
                }
            )
        }
        if(typeof(req.body.tt)!=undefined){
                global.db.query(
                    "delete from hr where name=?",
                    [req.body.ssp],
                    function s(err){
                        if(err) throw err
                    }
                )
        }
        if(typeof(req.body.cc)!=undefined){
                global.db.query(
                    "update hr set absence = ? where name=?",
                    [req.body.cc,req.body.ssr],
                    function s(err){
                        if(err) throw err
                    }
                )

        }
        if(typeof(req.body.sspp)!=undefined) {
            global.db.query(
                "update hr set note = ? where name=?",
                [req.body.kkll,req.body.sspp],
                function s(err){
                    if(err) throw err
                }
            )
        }
        if(typeof (req.body.pay)!=undefined){
            var t = (new Date().toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "))
            global.db.query(
                "insert into bill values(?,?,?)",
                ["pay-salary",Number(req.body.pay),t],
                function s(err){
                    if(err) throw err
                }
            )
        }
    }
)
module.exports = router;