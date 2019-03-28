
/*
      1. users aslında @RestController @RequestMapping("users") users'ın altında değerlendir anlamında.
      2. end point'ler aslında users/<sen yaz> olarak değerlendirelecek route edilecek.


*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
