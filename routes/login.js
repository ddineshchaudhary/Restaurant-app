var express = require('express');
var router = express.Router();

const usermodel = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next,) {
  res.render('login', { title: 'Express', heading : 'Login' });
});

router.post('/', (req,res) => {
  const {email , password} = req.body;
  
  usermodel.findOne({email: email})
  .then(user => {
    console.log(user.username);
    
    if(user) {
      if(user.password === password) {

        req.session.loggedIn = true;
        const username = user.username;

        res.redirect(`/menu?username=${encodeURIComponent(username)}`);

        // res.redirect('/menu');
        console.log('login successfull');
      } else {
        res.send('incorect password !')
      }
    } else {
      res.send('user does not exsist !');
    }
  })
});

module.exports = router;
