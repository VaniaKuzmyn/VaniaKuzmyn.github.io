"use strict";

$(document).ready(function () {
  $(".menu-item-just").click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  $('.link').addClass('animated');
  $(function (f) {
    var element = f('#back-top');
    f(window).scroll(function () {
      element['fade' + (f(this).scrollTop() > 500 ? 'In' : 'Out')](500);
    });
  });
  $(".up").on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });

  if (window.pageYOffset >= $('.link_about').offset().top - window.innerHeight) {
    $('.link_about').addClass('fadeInUp');
  }

  var map_marker = true;
  $(window).scroll(function () {
    if (window.pageYOffset >= $('.link_about').offset().top - window.innerHeight) {
      $('.link_about').addClass('fadeInUp');
    }

    if (window.pageYOffset >= $('.link_team').offset().top - window.innerHeight) {
      $('.link_team').addClass('fadeInUp');
    }

    if (window.pageYOffset >= $('.link_service').offset().top - window.innerHeight) {
      $('.link_service').addClass('fadeInUp');
    }

    if (window.pageYOffset >= $('.link_portfolio').offset().top - window.innerHeight) {
      $('.link_portfolio').addClass('fadeInUp');
    }

    if (window.pageYOffset >= $('.link_blog').offset().top - window.innerHeight) {
      $('.link_blog').addClass('fadeInUp');
    }

    if (window.pageYOffset >= $('.link_contact').offset().top - window.innerHeight) {
      $('.link_contact').addClass('fadeInUp');
    }

    if (window.pageYOffset >= $('.link_blog').offset().top - window.innerHeight && map_marker) {
      $(".footer").load("build/ajax/content.html");
      map_marker = false;
    }
  });
  $('.toggle-item_header').click(function () {
    $('.toggle-item_header').removeClass('toggle-item-active');
    $(this).addClass('toggle-item-active');
    var number = parseInt($(this).attr('data-number'));

    if (number == 1) {
      $('.title').fadeOut('slow', function () {
        $('.title-wrap').load('build/ajax/other.html .title_1');
      });
    } else if (number == 2) {
      $('.title').fadeOut('slow', function () {
        $('.title-wrap').load('build/ajax/other.html .title_2');
      });
    } else if (number == 3) {
      $('.title').fadeOut('slow', function () {
        $('.title-wrap').load('build/ajax/other.html .title_3');
      });
    }
  });
  $('.slider').slick({
    dots: true,
    prevArrow: "<button class = 'slick-prew'><i class='fas fa-arrow-left'></i></button>",
    nextArrow: "<button class = 'slick-next'><i class='fas fa-arrow-right'></i></button>"
  });
  $('.slick-dots li').addClass('slick-dot');
  $('.slick-dots li').html("<i class='fas fa-circle'></i>");
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#fff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 3
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }); // start counter  ----------------------------------------------

  $('.merit-quantity').addClass('count');
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];
  var marker = true;

  for (var i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function count(start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 10);
  };

  $(window).scroll(function () {
    if (window.pageYOffset >= $('.merit-outer').offset().top - window.innerHeight && marker) {
      for (var j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
      }

      marker = false;
    }
  }); // end counter  ------------------------------

  if (navigator.appVersion.indexOf("MSIE 10") !== -1) {}

  if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i)) {
    console.log('msie'); // Ie

    $('.our_story').removeClass('col-lg-8');
    $('.our_story').addClass('col-lg-12');
  } else if (navigator.userAgent.match(/firefox/i)) {
    console.log('firefox mozila'); // gecko = firefox mozila
  } else if (navigator.userAgent.match(/chrome/i)) {
    console.log('Chrome and Opera'); // Chrome and Opera(webkit)
  } else if (navigator.userAgent.match(/safari/i)) {
    console.log('Safary'); // Safary (and Opera)
  }
  /*
      $("#form").on("submit", function (event) {
          event.preventDefault();
          var email = $('.form-input_email').val();
          var name = $('.form-input_name').val();
          var message = $('.form-input_area').val();
         
              var jqxhr = $.post('form.php', {'email': email, 'name': name, 'message': message});
              jqxhr.done(function (data) {
                  alert(data);
              });
              jqxhr.fail(function (xhr, status, errorThrown) {
                 alert(status + errorThrown);
      
              });
          
          
      });
      */

});