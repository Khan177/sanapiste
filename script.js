(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
})();

var resourceContent = "";
var res = [];

$('form').submit(function(e){
	e.preventDefault();
	$.ajax({
  url:'https://api.telegram.org/bot' + res[0] + '/sendMessage',
  method:'POST',
  data:{chat_id:res[1],text:$('#name').val() + "\n" + $('#number').val() + "\n" + $('#mail').val()},
  success:function(){
  	console.log('msg sent');
  }
  });
});

$(function(){
  $.get( "info.txt", function( data ) {
      var resourceContent = data;
      res = resourceContent.split(" ");
      console.log(res);
  });
});

$("#but").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#request").offset().top
  }, 1000);
});


