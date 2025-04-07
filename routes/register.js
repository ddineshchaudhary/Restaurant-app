var express = require('express');
var router = express.Router();

const usermodel = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express', heading : 'Register' });
});

router.post('/', (req,res) => {
    usermodel.create(req.body);

    res.redirect('/login');
});

module.exports = router;
