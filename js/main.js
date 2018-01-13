$(document).ready(function(){

    $(function initMap() {
      var myLatLng = {lat: 51.53066, lng: -0.093566};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
    })
    $(function() {
       //Scrolling Effects
       var navLogo = $(".navlogo");
       var navColour = $(".navigation");
       var navLinks = $(".list__item")
       var navActive = $(".list__item--active")
       $(window).scroll(function() {
           var scroll = $(window).scrollTop();

           if (scroll >= 100) {
               navLogo.removeClass('navigation__logo--default').addClass('navigation__logo--scroll');
               navColour.removeClass('navigation__bar--default').addClass('navigation__bar--scroll');
               navLinks.removeClass('list__item--default').addClass('list__item--scroll');
               navActive.removeClass('list__item--active--default').addClass('list__item--active--scroll');
           } else {
               navLogo.removeClass('navigation__logo--scroll').addClass('navigation__logo--default');
               navColour.removeClass('navigation__bar--scroll').addClass('navigation__bar--deault');
               navLinks.removeClass('list__item--scroll').addClass('list__item--default');
               navActive.removeClass('list__item--active--scroll').addClass('list__item--active--default');
           }
       });
    });







});
