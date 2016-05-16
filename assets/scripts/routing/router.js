const Requests = require('../api/requests.js')

let myHandlers = {};

myHandlers.about = {
  model: function(params) {
    Requests.getAbout();
  }
};

myHandlers.home = {
  model: function(params) {
    let home = require('../handlebars/home.handlebars');
    return home;
  },
  setup: function(page) {
    $('#main-content').html(page);
  }
};

module.exports = myHandlers;
