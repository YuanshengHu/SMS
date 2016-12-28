var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  global.db.query(
      "select * from goods",
      function(err,row){
        if(err) throw  err
        res.render('customer',{title:"express",row:row})
      }
  )});
module.exports = router;