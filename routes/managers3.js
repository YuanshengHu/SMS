/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    global.db.query(
        "select * from goods",
        function(err,row){
            if(err) throw err
            res.render('dash/pages/m3', { title: 'Express',row:row });
        }
    )
});

router.post('/',function(req, res, next) {
    switch (req.body.tag){
        case "insert":
            global.db.query(
                "insert into goods values(?,?,?,?,?,?,?)",
                [req.body.name,req.body.kind,req.body.price,req.body.cost,req.body.stock,(req.body.price-req.body.cost),(req.body.price-req.body.cost)/req.body.price],
                function(err){
                    if(err) throw err
                }
            )
            break
        case "delete":
            global.db.query(
                "delete from goods where name = ?",
                [req.body.name],
                function(err){
                    if(err) throw err
                }
            )
            break
        case "change":
            global.db.query(
                "update goods set prince = ?, cost = ?,stock = ? where name=?",
                [req.body.price,req.body.cost,req.body.stock,req.body.name],
                function(err){
                    if(err)throw err
                }
                    )
                    break
    }
})

module.exports = router;