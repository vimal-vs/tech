var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', { title: 'SRMIST ' });
});

/* GET events page. */
router.get('/events', function (req, res, next) {
    res.render('events', { title: 'SRMIST ' });
});

/* GET venue page. */
router.get('/venue', function (req, res, next) {
    res.render('venue', { title: 'SRMIST ' });
});

/* GET contact-us page. */
router.get('/contact-us', function (req, res, next) {
    res.render('contact-us', { title: 'SRMIST ' });
});

module.exports = router;