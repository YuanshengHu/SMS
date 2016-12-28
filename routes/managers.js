var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dash/pages/blank', { title: 'Express',});
});

router.post('/',function(req, res, next) {
  var t1 = req.body.begint
  var t2=req.body.endt
  var st1= Date.parse(new Date(t1))
  var st2= Date.parse(new Date(t2))
  console.log(st1)
  console.log(st2)
  var n1 = Number(st1)
  var n2 = Number(st2)
  var turn = new Array()
    var turn2 = new Array()
    var turn3 = new Array()
  var tmp = new Array()
  global.db.query(
      "select kind,sum(count) as s0,sum(nprince) as s1,sum(npro) as "
      +"s2,sum(npro)/sum(nprince) as ss from (select kind, count,count*prince as nprince, "
      +"count*profit as npro from buyrecord join goods on buyrecord.goods=goods.name where time>? and time<?) A group by kind;",
      [st1,st2],
      function S1(err, rows, fields) {
        if (err) throw err;
        for(var i=0;i<rows.length;i++){
            tmp.push(rows[i].kind)
            tmp.push(rows[i].s0)
            tmp.push(rows[i].s1)
            tmp.push(rows[i].s2)
            tmp.push(rows[i].ss)
            console.log(tmp)
            turn.push(tmp)
            tmp=[]
        }
          global.db.query(
              "select max(time) as cc, sum(t) as ct from (select time , time div 404800000 as k "
              +", count*prince as t from(select * from buyrecord join goods on buyrecord.goods=goods.name where time>? and time<?) A) "
              +"B group by k;",
              [st1,st2],
              function s2(err,row){
                  if(err) throw err;
                  for(var i=0;i<row.length;i++){
                      tmp.push(row[i].cc)
                      tmp.push(row[i].ct)
                      turn2.push(tmp)
                      tmp=[]
                  }
                  global.db.query(
                      "select name,sum(count) as s0,sum(nprince) as s1,sum(npro) as s2,sum(npro)/sum(nprince) as s3 from(select name, count,count*prince as nprince,count*profit as npro from buyrecord join goods on buyrecord.goods=goods.name where time>? and time<?) B group by name;",
                      [st1,st2],
                      function s3(err,row2){
                          if(err)throw err
                          for(var i=0;i<row2.length;i++){
                              tmp.push(row2[i].name)
                              tmp.push(row2[i].s0)
                              tmp.push(row2[i].s1)
                              tmp.push(row2[i].s2)
                              tmp.push(row2[i].s3)
                              turn3.push(tmp)
                              tmp=[]
                          }
                          res.render('dash/pages/blank', { title: 'Express',turn2 :turn2,turn:turn,turn3:turn3});
                      }
                  )

              }
          )
        }
  )
});

module.exports = router;
