'use strict';

require('../../lib/router.js');

const router = new Router["default"]();

router.map(function(match) {
  match('/').to('home');
  match('/about').to('about');
});

let myHandlers = {};
//
myHandlers.about = {
  model: function(params) {
    let abouthandle = require('./handlebars/about.handlebars');
    // returing template to setup
    return abouthandle;
  },
  setup: function(page) {
    // loading template in page
    $('#main-content').html(page);
  }
};

myHandlers.home = {
  model: function(params) {
    let home = require('./handlebars/home.handlebars');
    return home;
  },
  setup: function(page) {
    $('#main-content').html(page);
  }
};


//
router.getHandler = function(name) {
  window.location.hash = `#/${name}`;
  return myHandlers[name];
};

$('.about').on('click', function(e){
  e.preventDefault();
  router.handleURL('/about');
});

$('.home').on('click', function(e){
  e.preventDefault();
  router.handleURL('/');
});

router.handleURL('/');

$(window).on('hashchange', function() {
  let windowhash = (window.location.hash).substring(1);
  router.handleURL(windowhash);
});
