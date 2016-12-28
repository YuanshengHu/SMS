/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('dash/pages/c1', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    var t = (new Date().toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "))
    global.db.query(
        "insert into bill values(?,?,?)",
        ["customer-refund",Number(req.body.tag),t],
        function(err){
            if(err) throw err
        }
    )
});
module.exports = router;