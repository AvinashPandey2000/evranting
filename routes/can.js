var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/canmodel', function(req, res, next) {
  console.log("/canmodel called");
  
  res.send("").end()

});

module.exports = router;
