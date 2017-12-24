(function($) {
  $.fn.popup = function(opts) {
    // default configuration
    var config = $.extend({}, {
      opt1: null
    }, opts);
    // main function
    function init(obj) {
      $('.buttonClick').click(function() {
        $('.ui-popup').addClass('show');
        $('.buttonClick').addClass('hide');
      });
      $('.popup-accept').click(function() {
        $('.ui-popup').removeClass('show');
        $('.buttonClick').removeClass('hide');
      });
      $('.popup-decline').click(function() {
        $('.ui-popup').removeClass('show');
        $('.buttonClick').removeClass('hide');
      });
    } 
    // initialize every element
    this.each(function() {
      init($(this));
    }); 
    return this;
  };
  // start
  $(function() {
    $('.ui-popup').popup();
  });
})(jQuery);