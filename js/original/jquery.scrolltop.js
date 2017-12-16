(function($) {
  $.fn.scrollTop = function(opts) {
    // default configuration
    var config = $.extend({}, {
      opt1: null
    }, opts);
    // main function
    function init(obj) {
      $(window).scroll(function() {
        var h = $(window).scrollTop();
        //取得捲動的距離(與top的距離)
        if (h > 100) {
          $(obj).css('display', 'block');
        } //距離大於100時 顯示
        else {
          $(obj).css('display', 'none');
        } //除此之外 隱藏
      })
      $(obj).css('display', 'block');
      $(obj).click(function() {
        $('html,body').animate({
          scrollTop: 0
        }, 'fast');
      })
    }
    // initialize every element
    this.each(function() {
      init($(this));
    });
    return this;
  };
  // start
  $(function() {
    $('.ui-gotop').scrollTop();
  });
})(jQuery);