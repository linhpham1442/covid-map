const express = require('express');
var router = express.Router();
const { getMap } = require('../controllers/mapController');

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Trang chủ'
    });
})

router.get('/thong-ke', function(req, res) {
    res.render('statistic', {
        title: 'Thống kê'
    });
})

router.get('/direction', function(req, res) {
    res.render('route', {
        title: 'Lộ trình'
    });
})

module.exports = router;