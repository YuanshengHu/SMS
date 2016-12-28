/**
 * Created by huyuansheng on 2016/10/27.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('dash/pages/storageblank', { title: 'Express' });
});

router.post('/',function(req,res,next){
    if(req.body.sk==1){
        global.db.query(
            "insert into storage(type,goods,amount,supplier,price,time)values (?,?,?,?,?,?)",
            ["in",req.body.name,req.body.count,req.body.supplier,req.body.price,req.body.time],
            function(err) {
                if (err) throw err;
                global.db.query(
                    "insert into bill values(?,?,?)",
                    ["entry-storage",Number(req.body.count)*Number(req.body.price),(new Date(req.body.time).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "))],
                    function(err){
                        if(err)throw err
                    }
                )
            }
        )
    }
    if(req.body.sk==2){
        global.db.query(
            "insert into storage(type,goods,amount,supplier,price,time)values (?,?,?,?,?,?)",
            ["out",req.body.name,req.body.count,req.body.pq,req.body.pq,req.body.time],
            function(err) {
                if (err) throw err;
            }
        )
    }
})
module.exports = router;
