/**
 * Created by huyuansheng on 2016/10/28.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('dash/pages/m12', { title: 'Express' });
});

module.exports = router;