'use strict';
let getAbout = function(stuff){
  // let root = 'http://book-json.herokuapp.com';

  // $.ajax({
  //   url: root + '/books/4',
  //   method: 'GET'
  // }).then(function(data) {
  //   let abouthandle = require('../handlebars/about.handlebars');
  //   $('#main-content').html(abouthandle);
  //   // debugger;
  //
  // });
    let abouthandle = require('../handlebars/about.handlebars');
    $('#main-content').html(abouthandle);
};

module.exports = {getAbout};
