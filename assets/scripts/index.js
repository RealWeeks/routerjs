'use strict';

require('../../lib/router.js');

const router = new Router["default"]();

router.map(function(match) {
  match('/').to('home');
  match('/home').to('home');
  match('/about').to('about');
});


let myHandlers = require('./routing/router.js');
let RouteHandlers = require('./routing/handlers.js');

RouteHandlers(router);

router.getHandler = function(name) {
  window.location.hash = `#/${name}`;
  return myHandlers[name];
};



router.handleURL('/');

window.onpopstate = function(){
  let windowhash = (window.location.hash).substring(1);
  router.handleURL(windowhash);
};
