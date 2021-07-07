
$(document).ready(function() {
  //for hamburgur button
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });
// for scroll navbar
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
      } else {
        $('.nav-menu').removeClass('custom-navbar');
      }
    });
// end scroll bar
// camera image scroll
$(window).scroll(function() {
  let position = $(this).scrollTop();
  if(position >= 600) {
    $('.camera').addClass('fromleft');
      $('.textanim').addClass('fromright');
  } else {
    $('.camera').removeClass('fromleft');
      $('.textanim').removeClass('fromright');
  }
  });
// end scroll

// Gallery
$('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });

  $('.gallery-list-item').click(function() {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  // card animation
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 3700) {
      $('.left').addClass('movefromleft');
        $('.right').addClass('movefromright');
          $('.bottom').addClass('movefrombottom');
    } else {
      $('.left').removeClass('movefromleft');
        $('.right').removeClass('movefromright');
        $('.bottom').removeClass('movefrombottom');
    }
    });
  //
  });
