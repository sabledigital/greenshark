var express = require('express');
var router = express.Router();
var User = require('./users.js');

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
  console.log("Data from forms: " + JSON.stringify(req.body));
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

  user.save(function(err){
    if(err) {
      res.render('index', {'message': '' + err})
    } else {
      res.render('index', {'message': 'Ok'})
    }
  });
});


module.exports = router;
