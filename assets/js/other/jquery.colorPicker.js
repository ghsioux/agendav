/**
 * Really Simple Color Picker in jQuery
 * 
 * Copyright (c) 2008 Lakshan Perera (www.laktek.com)
 * Licensed under the MIT (MIT-LICENSE.txt)  licenses.
 * 
 */

(function($){
  $.fn.colorPicker = function(){    
    if(this.length > 0) buildSelector();
    return this.each(function(i) { 
      buildPicker(this)}); 
  };
  
  var selectorOwner;
  var selectorShowing = false;
  
  buildPicker = function(element){
    //build color picker
    control = $("<div class='color_picker'>&nbsp;</div>")
    control.css('background-color', $(element).val());
    
    //bind click event to color picker
    control.bind("click", toggleSelector);
    
    //add the color picker section
    $(element).after(control);

    //add even listener to input box
    $(element).bind("change", function() {
      selectedValue = $(element).val();
      $(element).next(".color_picker").css("background-color", selectedValue);
    });
    
    //hide the input box
    $(element).hide();

  };
  
  buildSelector = function(){
    selector = $("<div id='color_selector'></div>");

    //add color pallete
    $.each($.fn.colorPicker.defaultColors, function(i, color){
      swatch = $("<div class='color_swatch'>&nbsp;</div>")
      swatch.css("background-color", color);
      swatch.bind("click", function(e){ changeColor(color) });
      swatch.bind("mouseover", function(e){ 
        $(this).css("border-color", "#598FEF"); 
        $("input#color_value").val(color);    
      }); 
      swatch.bind("mouseout", function(e){ 
        $(this).css("border-color", "#000");
        $("input#color_value").val($(selectorOwner).prev("input").val());
      });
      
      swatch.appendTo(selector);
    });
  
    //add color value field
    color_field = $("<label for='color_value'>Color</label><input type='text' size='8' id='color_value'/>");
    color_field.bind("keydown", function(event){
      if(event.keyCode == 13) {changeColor($(this).val());}
      if(event.keyCode == 27) {toggleSelector()}
    });

    $("<div id='color_custom'></div>").append(color_field).appendTo(selector);

    $("body").append(selector); 
    selector.hide();
  };
  
  checkMouse = function(event){
    //check the click was on selector itself or on selectorOwner
    var selector = "div#color_selector";
    var selectorParent = $(event.target).parents(selector).length;
    if(event.target == $(selector)[0] || event.target == selectorOwner || selectorParent > 0) return
    
    hideSelector();   
  }
  
  hideSelector = function(){
    var selector = $("div#color_selector");
    
    $(document).unbind("mousedown", checkMouse);
    selector.hide();
    selectorShowing = false
  }
  
  showSelector = function(){
    var selector = $("div#color_selector");
    
    //alert($(selectorOwner).offset().top);
    
    selector.css({
      top: $(selectorOwner).offset().top + ($(selectorOwner).outerHeight()),
      left: $(selectorOwner).offset().left
    }); 
    colorValue = $(selectorOwner).prev("input").val();
    $("input#color_value").val(colorValue);
    selector.show();
    
    //bind close event handler
    $(document).bind("mousedown", checkMouse);
    selectorShowing = true 
  }
  
  toggleSelector = function(event){
    selectorOwner = this; 
    selectorShowing ? hideSelector() : showSelector();
  }
  
  changeColor = function(value){
    selectedValue = value;
    $(selectorOwner).css("background-color", selectedValue);
    $(selectorOwner).prev("input").val(selectedValue).change();
    
    //close the selector
    hideSelector();    
  };

  //public methods
  $.fn.colorPicker.addColors = function(colorArray){
    $.fn.colorPicker.defaultColors = $.fn.colorPicker.defaultColors.concat(colorArray);
  };
  
  $.fn.colorPicker.defaultColors = 
    [ 'black', 'brown', 'olive', 'navy', 'purple', 'gray', 'maroon', 'orange', 'green', 'teal', 'blue', 'indigo', 'silver', 'red', 'yellow', 'lime', 'aqua', 'fuchsia', 'white'];
  
})(jQuery);