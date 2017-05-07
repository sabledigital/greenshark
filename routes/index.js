var express = require('express');
var router = express.Router();
var User = require('./users.js');
var request = require('superagent');


router.get('*',function(req,res){
    res.redirect('https://greenshark.com.mx'+req.url)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Greenshark' });
});

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Greenshark' });
});

router.get('/paths', function(req, res, next) {
  res.render('paths', { title: 'Greenshark' });
});

router.get('/cursos', function(req, res, next) {
  res.render('cursos', { title: 'Greenshark' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Greenshark' });
});



//CURSOS

//Template
router.get('/curso_temp', function(req, res, next) {
  res.render('curso_temp', { title: 'Greenshark' });
});


//cursos

router.get('/introduccion-bigdata', function(req, res, next) {
  res.render('curso1', { title: 'Greenshark' });
});

router.get('/bigdata-engineer', function(req, res, next) {
  res.render('curso2', { title: 'Greenshark' });
});

router.get('/introduccion-ciencia-de-datos', function(req, res, next) {
  res.render('curso3', { title: 'Greenshark' });
});

//paths
router.get('/path1', function(req, res, next) {
  res.render('path1', { title: 'Greenshark' });
});

router.get('/path2', function(req, res, next) {
  res.render('path2', { title: 'Greenshark' });
});

/*
router.get('/path3', function(req, res, next) {
  res.render('path3', { title: 'Greenshark' });
});
*/


router.post('/form-submitted', function(req, res, next) {
  var g_response = req.body["g-recaptcha-response"] || "";
  var g_secret = "6LcguBsUAAAAAFzBjdVzldljaaI6tmbqhk8B6ZtD";
  var upres = res;


  if(g_response) {
    request
    .post('https://www.google.com/recaptcha/api/siteverify?secret=' + g_secret + '&response=' + g_response)
    .end(function(err, res) {
      if(res.body.success) {
        var email = req.body.email || "Sin email";
        var name = req.body.nombre;
        var phone = req.body.tel;
        var course = req.body.cursos || "default";
        var comments = req.body.comments || "Sin comentarios";

        var user = new User({
          name: name,
          email: email,
          phone: phone,
          origin: req.headers.origin
        });

	console.log(JSON.stringify(user));
        user.save(function(err){
          if(err) {
            console.log("it was an error " + err)
            upres.redirect('/');
          } else {
		console.log("It wasn an error we're in troubles");
            upres.redirect('/');
          }
        });
      }
    });
  } else {
    res.render('index', {'message': 'Error'})
  }

});


module.exports = router;
