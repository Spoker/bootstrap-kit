// @koala-append "../../plugins/bootstrap-ie10-viewport-hack.js"
// @koala-append "../../plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"
// @koala-append "../../plugins/bootstrap-hover-tabs/bootstrap-hover-tabs.js"

(function($) {
  $(function() {
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
      e.stopPropagation();
    });
  });
})(jQuery);
