var express = require('express');
var router = express.Router();

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

router.get('/curso1', function(req, res, next) {
  res.render('curso1', { title: 'Greenshark' });
});

router.get('/curso2', function(req, res, next) {
  res.render('curso2', { title: 'Greenshark' });
});

router.get('/curso3', function(req, res, next) {
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




module.exports = router;
