var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'tugberk' });
});


// @RestController, RequestMapping mantığı burada bir router var onun get metoduna verdiğimiz fonksiyone adresi ile mümk
router.get('/hello',
    //sana fonksiyon adresi veriyorum router.
    function(req, res, next)
    {
      res.render('sample', { title: 'hello' });
    }
);

module.exports = router;
