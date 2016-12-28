var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    var a=req.body.id
    var b=req.body.pass
    global.db.query(
        "select * from usr where name=? and pass=?",
        [a,b],
        function(err,row){
          if(err) throw err
          if(row.length==0){
            res.render('index', { title: 'Express' })
            return
          }
          else{
            switch (row[0].ss){
              case "manager":
                    res.redirect('/managers')
                    req.session.text="yes"
                    break
              case "casher":
                res.redirect('/casher')
                req.session.text="yes"
                break
              case "storager":
                    res.redirect('/storage')
                    req.session.text="yes"
                    break

            }
          }
        }

    )
});
module.exports = router;
