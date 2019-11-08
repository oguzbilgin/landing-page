  /* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
  $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });

var mySwiper = new Swiper('.comment-slider', {

    direction: 'horizontal',
    loop:true,

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        992:{
            slidesPerView:3,
        },
        768:{
          slidesPerView:2
        }
      },

    autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

 /* Image Slider - Swiper */
 var imageSlider = new Swiper('.image-slider', {
  autoplay: {
      delay: 2000,
      disableOnInteraction: false
},
  loop: true,
  navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
  slidesPerView: 1,
  spaceBetween: 10,
breakpoints: {
      // when window is >= 380px
      380: {
          slidesPerView: 2,
          spaceBetween: 10
      },
      // when window is >= 516px
      516: {
          slidesPerView: 3,
          spaceBetween: 10
      },
      // when window is >= 768px
      768: {
          slidesPerView: 4,
          spaceBetween: 20
      },
      // when window is >= 992px
      992: {
          slidesPerView: 5,
          spaceBetween: 30
      }

  }
});


    /* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 600, 'easeInOutExpo');
    event.preventDefault();
  });
});
  

  /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
      if ($(this).val() != '') {
        $(this).addClass('notEmpty');
      } else {
        $(this).removeClass('notEmpty');
      }
      });

     /* Contact Form */
     $("#contactForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Tüm alanların doldurulması zorunludur!");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
        }
    });

    function csubmitForm() {
        // initiate variables with form content
		var name = $("#cname").val();
		var email = $("#cemail").val();
        var message = $("#cmessage").val();
        var terms = $("#cterms").val();
        $.ajax({
            type: "POST",
            url: "php/contactform-process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    cformSuccess();
                } else {
                    cformError();
                    csubmitMSG(false, text);
                }
            }
        });
	}

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Message Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Privacy Form */
    $("#privacyForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            pformError();
            psubmitMSG(false, "Tüm alanların doldurulası zorunludur!");
        } else {
            // everything looks good!
            event.preventDefault();
            psubmitForm();
        }
    });

    function psubmitForm() {
        // initiate variables with form content
		var name = $("#pname").val();
		var email = $("#pemail").val();
        var select = $("#pselect").val();
        var terms = $("#pterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/privacyform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    pformSuccess();
                } else {
                    pformError();
                    psubmitMSG(false, text);
                }
            }
        });
	}

    function pformSuccess() {
        $("#privacyForm")[0].reset();
        psubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function pformError() {
        $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function psubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

        /* Video Lightbox - Magnific Popup */
        $('.video-popup, .popup-vimeo').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
          iframe: {
              patterns: {
                  youtube: {
                      index: 'youtube.com/', 
                      id: function(url) {        
                          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                          if ( !m || !m[1] ) return null;
                          return m[1];
                      },
                      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                  },
                  vimeo: {
                      index: 'vimeo.com/', 
                      id: function(url) {        
                          var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                          if ( !m || !m[5] ) return null;
                          return m[5];
                      },
                      src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                  }
              }
          }
      });