$(function() {
  $('body').click(function(e) {
    if($(this).hasClass('_design')) {
      $(this).removeClass('_design');
    } else {
      $(this).addClass('_design');
    }
  });
});