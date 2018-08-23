(function($) {
  Backdrop.behaviors.beautytips_node = {
    attach: function(context, settings) {
      // Fix for backdrop attach behaviors in case the plugin is not attached.
      if (typeof(jQuery.bt) == 'undefined' && jQuery.bt == null) {
        return;
      }
      var beautytips = Backdrop.settings.beautytips;
      var styles = Backdrop.settings.beautytipStyles;
      var beautytipsnode = Backdrop.settings.beautyTipsNode;
      var defaultStyle = beautytipsnode.defaultStyle;
      var defaultStyleSettings = styles[defaultStyle];

      $('.beautytips-node:not(.beautytips-processed)').addClass('beautytips-processed').each(function() {
        var wrapper = $(this);
        $(this).find('a').each(function() {
          defaultStyleSettings.trigger = 'none';
          defaultStyleSettings.ajaxPath = '/beautytips' + $(this).attr('href');
          $(wrapper).bt(defaultStyleSettings);
        });
        $(wrapper).click(function() {
          // $(this).btOn();
          // return false;
        });
        // var triggerOn = beautytipsnode.triggerOn;
        // var triggerOff = beautytipsnode.triggerOff;
        // $(wrapper).triggerOn(function(){
        //   $(this).btOn();
        // });
        // $(wrapper).triggerOff(function(){
        //   $(this).btOff();
        // });
        $(wrapper).hover(
          function() {
            $(this).btOn();
            return false;
          }, function() {
            // $(this).btOff();
            // return false;
          }
        );
      });
    }
  };
})(jQuery);
