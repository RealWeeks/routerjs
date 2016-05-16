'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

require('../../lib/router.js');
let abouthandle = require('./about.handlebars');

let router = new Router["default"]();

router.map(function(match) {
  // match("/posts").to("postIndex");
  match('/about').to('about');
  // match('/abouts').to(abouthandle);
});

let myHandlers = {};
//
myHandlers.about = {
  model: function(params) {
    debugger;
    // return App.Post.findAll();
    return "TEST";
  },

  setup: function(posts) {
    debugger;
    // render a template with the posts
    $('body').html(posts);
  }
};
//
router.getHandler = function(name) {
  debugger;
  return myHandlers[name];
};

debugger;
// let t = router.handleURL('/about');
debugger;
