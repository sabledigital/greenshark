var express = require('express');
var router = express.Router();
//var User = require('./users.js');

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

router.get('/path3', function(req, res, next) {
  res.render('path3', { title: 'Greenshark' });
});

/*
router.post('/form-submitted', function(req, res, next) {
  var email = req.body.exampleInputEmail1;
  var name = req.body.exampleInputname1;
  var phone = req.body.exampleInputtel1;

  var user = new User({
    name: name,
    email: email,
    phone: phone,
    origin: origin
  });

  user.save(function(err){
    if(err) {
      res.json({'message': 'Hubo un problema vuelve a intentarlo'})
    } else {
      res.json({'message': 'Usuario registrado'})
    }
  });
});
*/

module.exports = router;
