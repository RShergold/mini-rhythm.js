
;(function(){

  var attribute_name = 'data-rhythm',
      init,
      keep_rhythm,
      keep_rhythm_older_browsers,
      rhythm_elements = [],
      count,
      i = 0,
      line_height,
      remainder,
      margin;


  init = function() {

    var elements = document.getElementsByTagName('*');

    for (count=elements.length; i<count; i++)
      if (elements[i].getAttribute(attribute_name))
        rhythm_elements.push(elements[i]);

    count = rhythm_elements.length;

    keep_rhythm();
  }

  keep_rhythm = function(){
    for (i=0;i<count;i++) {
      line_height = window.getComputedStyle ?
        parseInt( window.getComputedStyle(rhythm_elements[i].parentNode).lineHeight )
      :
        older_browser_line_height( rhythm_elements[i].parentNode )
      ;
      remainder = rhythm_elements[i].offsetHeight % line_height;
      margin = remainder ? line_height - remainder : 0;
      margin += parseFloat(rhythm_elements[i].getAttribute(attribute_name)) * line_height;
      rhythm_elements[i].style.marginBottom = margin+'px';
    }
  }

  function older_browser_line_height( element ) {
    var line_height_string = element.currentStyle.lineHeight;
    line_height = parseInt( line_height_string );
    return (line_height_string.slice(-2) == 'px') ? line_height : line_height * 96 / 72;
  }

  init();
  window.onload = keep_rhythm;
  window.onresize = keep_rhythm;

})();

