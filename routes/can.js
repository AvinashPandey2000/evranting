var express = require('express');
var router = express.Router();
var canmodel= require('../model/canmodel')

/* GET home page. */
router.post('/canmodel', function(req, res, next) {
    console.log(req.body);
    canmodel.convert_data(req.body,(data,result)=>{
        console.log(result);
    })
  
  


  res.send("").end()

});

module.exports = router;
