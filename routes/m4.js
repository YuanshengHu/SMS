/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    global.db.query(
        "select * from bill",
        function(err,row){
            if(err)throw err
            res.render('dash/pages/m4', { title: 'Express',row:row});
        }

    )

});

module.exports = router;