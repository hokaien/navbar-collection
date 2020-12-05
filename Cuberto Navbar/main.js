let menuToggle = 'close';
let socialCounter = 0, socialTimer = 0, socialCounterFade = 0, socialTimerFade = 0;
let menuCounter = 0, menuTimer = 0, menuCounterFade = 0, menuTimerFade = 0;

$('#nav-menu').click(function () {
  if ( menuToggle === 'close' ) {

    /* MENU ICON TOGGLE */
    $('#nav-menu').addClass('clicked');
    menuToggle = 'open';

    /* NAV SLIDE DOWN */
    $("#nav-slide").animate({
      top: '-200px'
    },500,navEase());

    /* CHANGE BACKGROUND COLOR */
    $('body').css('background-color','rgb(204,204,204');

    /* SOCIAL LINK APPEAR */
    setTimeout(function () {
      socialTimer = setInterval(function () {
        $('.social-link:eq(' + socialCounter + ')').css('visibility','initial');
        $('.social-link:eq(' + socialCounter + ')').css('transform','translateY(0)');
        $('.social-link:eq(' + socialCounter + ')').css('opacity','1');
        socialCounter++;
        if ( socialCounter > 7) {
          socialCounter = 0;
          clearInterval(socialTimer);
        }
      },40)
    },400);

    setTimeout(function () {
      menuTimer = setInterval(function () {
        $('.menu-link:eq(' + menuCounter + ')').css('visibility','initial');
        $('.menu-link:eq(' + menuCounter + ')').css('transform','translateY(0)');
        $('.menu-link:eq(' + menuCounter + ')').css('opacity','1');
        menuCounter++;
        if ( menuCounter > 7) {
          menuCounter = 0;
          clearInterval(menuTimer);
        }
      },40)
    },400);

  } else if ( menuToggle === 'open' ) {

    /* MENU ICON TOGGLE */
    $('#nav-menu').removeClass('clicked');
    menuToggle = 'close';

    /* NAV SLIDE UP */
    setTimeout(function () {
      $("#nav-slide").animate({
        top: '-110vh'
      },500,'easeInCubic');
    },350);

    /* CHANGE BACKGROUND COLOR */
    setTimeout(function () {
      $('body').css('background-color','rgb(255,255,255')
    },650);

    /* SOCIAL LINK APPEAR */
    socialTimerFade = setInterval(function () {
      $('.social-link:eq(' + socialCounterFade + ')').css('visibility','hidden');
      $('.social-link:eq(' + socialCounterFade + ')').css('transform','translateY(15px)');
      $('.social-link:eq(' + socialCounterFade + ')').css('opacity','0');
      socialCounterFade++;
      if ( socialCounterFade > 7) {
        socialCounterFade = 0;
        clearInterval(socialTimerFade);
      }
      },40);

    menuTimerFade = setInterval(function () {
      $('.menu-link:eq(' + menuCounterFade + ')').css('visibility','hidden');
      $('.menu-link:eq(' + menuCounterFade + ')').css('transform','translateY(-30px)');
      $('.menu-link:eq(' + menuCounterFade + ')').css('opacity','0');
      menuCounterFade++;
      if ( menuCounterFade > 4 ) {
        menuCounterFade = 0;
        clearInterval(menuTimerFade);
      }
    },40)

  }
});

$(window).on('resize load', function () {
  if ( $(window).width() < 770 ) {
    $('.social-link:eq(0)').html('<i class="fab fa-facebook-f" style="margin-top: 2px"></i>');
    $('.social-link:eq(1)').html('<i class="fab fa-dribbble" style="margin-top: 2px"></i>');
    $('.social-link:eq(2)').html('<i class="fab fa-behance" style="margin-top: 2px"></i>');
    $('.social-link:eq(3)').html('<i class="fab fa-twitter" style="margin-top: 2px"></i>');
    $('.social-link:eq(4)').html('<i class="fab fa-instagram" style="margin-top: 2px"></i>');
    $('.social-link:eq(5)').html('<i class="fab fa-medium" style="margin-top: 2px"></i>');
  } else if ( $(window).width() > 770 ) {
    $('.social-link:eq(0)').html('<span data-hover="Facebook">Facebook</span>');
    $('.social-link:eq(1)').html('<span data-hover="Dribbble">Dribbble</span>');
    $('.social-link:eq(2)').html('<span data-hover="Behance">Behance</span>');
    $('.social-link:eq(3)').html('<span data-hover="Twitter">Twitter</span>');
    $('.social-link:eq(4)').html('<span data-hover="Instagram">Instagram</span>');
    $('.social-link:eq(5)').html('<span data-hover="Medium">Medium</span>');
  }
});

let navEase = () => {
  if ( $(window).width() < 375 ) {
    return 'easeOutCubic';
  } else {
    return 'easeOutBack';
  }
};

let $navlink0 = $(".menu-link:eq(0)");
let $navlink1 = $(".menu-link:eq(1)");
let $navlink2 = $(".menu-link:eq(2)");
let $navlink3 = $(".menu-link:eq(3)");
let $navlink4 = $(".menu-link:eq(4)");

$navlink1.mouseleave(function () {
  $navlink0.addClass("reverse");
  $navlink0.mouseenter(function () {
    $navlink1.addClass("reverse");
  });
});

$navlink0.mouseleave(function () {
  $navlink1.removeClass("reverse");
  $navlink0.removeClass("reverse");
});

$navlink2.mouseleave(function () {
  $navlink1.addClass("reverse");
  $navlink1.mouseenter(function () {
    $navlink2.addClass("reverse");
  });
});

$navlink1.mouseleave(function () {
  $navlink2.removeClass("reverse");
  $navlink1.removeClass("reverse");
});

$navlink3.mouseleave(function () {
  $navlink2.addClass("reverse");
  $navlink2.mouseenter(function () {
    $navlink3.addClass("reverse");
  });
});

$navlink2.mouseleave(function () {
  $navlink3.removeClass("reverse");
  $navlink2.removeClass("reverse");
});

$navlink4.mouseleave(function () {
  $navlink3.addClass("reverse");
  $navlink3.mouseenter(function () {
    $navlink4.addClass("reverse");
  });
});

$navlink3.mouseleave(function () {
  $navlink4.removeClass("reverse");
  $navlink3.removeClass("reverse");
});

$navlink4.mouseleave(function () {
  $navlink4.removeClass("reverse");
});