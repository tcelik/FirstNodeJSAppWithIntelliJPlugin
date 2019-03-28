
/*
      1. users aslında @RestController @RequestMapping("users") users'ın altında değerlendir anlamında.
      2. end point'ler aslında users/<sen yaz> olarak değerlendirelecek route edilecek.

      3. Controller alınır router olmuş burada.
*/

//express ve router alınır.
var express = require('express');
var router = express.Router();

/* /benidegor/goruyorum get htpp requestine karşılık araya giriyorum.*/
router.get('/:from-:to', function(req, res, next) { //araya giriyorum requesti server parse etti.
    //response dönüyorum istersem string gönderirim istersem render ile html gönderimi yaparım.


    //yeahhhh işte bu
    //ver bana key verim sana value olan bu işte request.getParameter in jsp or servlet mechanismi
    //aslında parse etti /benidegor/ankara-istanbul from-to mekanizmasını bir yerlerde tutuyor.
    var from = req.param("from");
    var to  = req.param("to");

    console.log('${from}-${to}');
    console.log(req.param("from"));
    console.log(req.param("to"));

    //response dönüyorum hacı.
    //res.send('/benidegor/goruyorum isteğine karşılık\n');

    //template-engine.
    res.send(from + 'dan-' +to + "ya gidiyorsun.")


});

module.exports = router;
