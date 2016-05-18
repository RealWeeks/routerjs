'use strict';
let getAbout = function(param){
  // let root = 'http://book-json.herokuapp.com';

  // $.ajax({
  //   url: root + '/books/4',
  //   method: 'GET'
  // }).then(function(data) {
  //   let abouthandle = require('../handlebars/about.handlebars');
  //   $('#main-content').html(abouthandle);
  //
  //
  // });
    let abouthandle = require('../handlebars/about.handlebars');
    $('#main-content').html(abouthandle);
};

module.exports = {getAbout};
