/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    global.db.query(
        "select * from storage",
        function(err,rows){
            if(err) throw err
            res.render('dash/pages/s2', { title: 'Express',rows:rows});
        }
    )
});

module.exports = router;