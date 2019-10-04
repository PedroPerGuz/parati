var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { titulo: 'Nodejs', nav1: 'NodeJs-Express-Ejs' });
});

/* GET aniv page. */
router.get('/aniv', (req, res) => {
    res.render('aniv', { titulo: 'Aniversario', nav1: 'Datos de Aniversario' });
});

/* GET inf listing. */
router.get('/inf', (req, res) => {
    res.render('inf', { titulo: 'Information', nav1: 'Information de pagina' });
});

module.exports = router;