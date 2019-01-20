$(function(){

  jQuery.fn.autoscroll = function(selector) {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 500);
}

  $('.video__btn-order').on('click', function(){
    $('.order__form').autoscroll();
  });
})
