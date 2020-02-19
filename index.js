$(document).ready(function(){
  /*
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const openLinks = document.querySelector('.nav-links');
    
    
    hamburger.addEventListener('click', () =>{
        navLinks.classList.toggle('open');
    });*/

    
/*
    $(window).scroll(function(){
                                                                            /** visibility: visible; */
       /* var top = $(window).scrollTop();
  /*     
        if(top>=600) {
            $('.navi').addClass('navi-sticky');
            $('.logo1').css("visibility", "hidden");
            $('.logo2').css("visibility", "visible");
            
        } else if ($('.navi').hasClass('navi-sticky')) {
                $('.navi').removeClass('navi-sticky');
                $('.logo1').css("visibility", "visible");
                $('.logo2').css("visibility", "hidden");
        }
    });
*/

    /* SMOOTH SCROOL */

    $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /* END OF SMOOTH SCROOL*/

    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });


});
