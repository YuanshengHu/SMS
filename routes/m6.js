/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    global.db.query(
        "select * from member",
        function(err,row){
            if(err) throw err
            res.render('dash/pages/m6', { title: 'Express',row:row });
        }
    )
});

router.post('/',function(req, res, next) {
    switch (req.body.tag){
        case "insert":
            global.db.query(
                "insert into member values(?,?,?,?,?)",
                [req.body.id,req.body.name,req.body.level,req.body.tele,req.body.due],
                function(err){
                    if(err) throw err
                }
            )
            break
        case "delete":
            global.db.query(
                "delete from member where id = ?",
                [req.body.id],
                function(err){
                    if(err) throw err
                }
            )
            break
        case "change":
            global.db.query(
                "update member set due = ?, tele = ?,level = ? where id=?",
                [req.body.due,req.body.tele,req.body.level,req.body.id],
                function(err){
                    if(err)throw err
                }
                    )
                    break
    }
})

module.exports = router;