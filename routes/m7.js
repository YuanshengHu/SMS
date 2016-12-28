/**
 * Created by huyuansheng on 2016/10/31.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    global.db.query(
        "select * from usr",
        function(err,row){
            if(err) throw err
            res.render('dash/pages/m7', { title: 'Express',row:row });
        }
    )
});
router.post('/', function (req,res) {
    switch (req.body.tag){
        case "insert":
            global.db.query(
                "insert into usr values(?,?,?)",
                [req.body.name,req.body.pass,req.body.level],
                function(err){
                    if(err) throw err
                }
            )
            break
        case "delete":
            global.db.query(
                "delete from usr where name = ?",
                [req.body.name],
                function(err){
                    if(err) throw err
                }
            )
            break
        case "change":
            global.db.query(
                "update usr set pass = ?,ss = ? where name=?",
                [req.body.pass,req.body.level,req.body.name],
                function(err){
                    if(err)throw err
                }
            )
            break
    }
})
module.exports = router;