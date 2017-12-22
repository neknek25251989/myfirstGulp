(function($) {
  $.fn.popup = function(opts) {
    // default configuration
    var config = $.extend({}, {
      opt1: null
    }, opts);
    // main function
    function init(obj) {
      $('.buttonClick').click(function() {
        $('.ui-popup').show('slow', function()  {
            
        });
        $('.buttonClick').hide('slow', function() {
          
        });
      });
      $('.popup-accept').click(function() {
        $('.ui-popup').hide('slow', function() {
          
        });
        $('.buttonClick').show('slow', function() {
          
        });
      });
      $('.popup-decline').click(function() {
        $('.ui-popup').hide('fast', function() {
          
        });
        $('.buttonClick').show('fast', function() {
          
        });
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