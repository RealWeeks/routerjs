'use strict';
let getAbout = function(param){
  // let root = 'http://book-json.herokuapp.com';

  // $.ajax({
  //   url: root + '/books/4',
  //   method: 'GET'
  // }).then(function(data) {
  //
  // Bind data to template
  //
  // return compiled template
  //
  //
  // });
    let abouthandle = require('../handlebars/about.handlebars');
    return abouthandle;
};

module.exports = {getAbout};
