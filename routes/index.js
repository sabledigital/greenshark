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

module.exports = router;
