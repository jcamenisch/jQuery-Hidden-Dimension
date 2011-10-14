(function($){
  $.fn.realDim = function(){
    if (arguments.length && typeof arguments[0] == 'string') {
      var dimension = arguments[0]

      if (this.is(':visible')) return this[dimension]();

      var visible_container = this.closest(':visible');

      if (!visible_container.is('body')) {
        var
          container_clone = $('<div />')
            .append(visible_container.children().clone())
            .css({
              position: 'absolute',
              left:'-32000px',
              top: '-32000px',
              width: visible_container.width(),
              height: visible_container.height()
            })
            .appendTo('body'),
          element_index = $('*',visible_container).index(this),
          element_clone = $('*',container_clone).slice(element_index);
        
        element_clone.parentsUntil(':visible').show();
        
        var result = element_clone[dimension]();
        container_clone.remove();
        return result;
      } else {
        //TO-DO: support elements whose nearest visible ancestor is <body>
        return undefined
      }
    }
    return undefined //nothing implemented for this yet
  }
}(jQuery));