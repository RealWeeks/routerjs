const RouteHandlers = function(router){
  $('.about').on('click', function(e){
    e.preventDefault();
    router.handleURL('/about');
  });

  $('.home').on('click', function(e){
    e.preventDefault();
    router.handleURL('/');
  });
}

module.exports = RouteHandlers;
