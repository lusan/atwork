var myController = require('../controllers/users');
/**
 * Init the controller
 */
module.exports = function(System) {
  var users = myController(System);

  var routes = [];
  
  routes.push({
    method: 'post',
    path: '/',
    handler: users.create
  });

  return routes;
};