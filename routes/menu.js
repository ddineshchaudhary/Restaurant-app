var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
if(req.session.loggedIn === true) 
  {
      const username = req.query.username;
      
      const menuItems = [
        { name: 'Margherita Pizza', description: 'Classic pizza with fresh mozzarella and basil.', price: 'RS.299' },
        { name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing and croutons.', price: 'RS.399' },
        { name: 'Spaghetti Carbonara', description: 'Pasta with creamy sauce, pancetta, and parmesan.', price: 'RS.499' },
        { name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection.', price: 'RS.349' },
        { name: 'Tiramisu', description: 'Classic Italian dessert with coffee and mascarpone.', price: 'RS.199' }
      ];

      res.render('menu', { title: 'Express', heading: 'DC Menu Page', menuItems, username });
  } else {
    res.render('menu', { title: 'Express', username: 'Please Login' });
  }
});

module.exports = router;
