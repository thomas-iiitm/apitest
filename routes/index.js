var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let msg = {
    "authenticated": true,
  }
  res.send(msg);
});

module.exports = router;
