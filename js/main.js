/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(document).ready(function() {
	
	 // Prevent console.log from generating errors in IE for the purposes of the demo
         if ( ! window.console ) console = { log: function(){} };
        
         $('.single-page-nav').singlePageNav({
             offset: $('.single-page-nav').outerHeight(),
             filter: ':not(.external)',
             updateHash: true,
             beforeStart: function() {
                 console.log('begin scrolling');
             },
             onComplete: function() {
                 console.log('done scrolling');
             }
         });
		 
	
         	$('.tweet-slider').unslider({
         		animation: 'fade',
         		autoplay: true,
         		nav: true, 
         		delay:8000,
         		arrows: false 
         		});
				
		$(window).scroll(function() {
            var s = $(window).scrollTop(),
            opacityVal = (s / 600.0);
            $('.vaish_overlay').css('opacity', opacityVal);
         });
		 
		 	  $(window).bind("scroll", function() {
             if ($(this).scrollTop() > 520) {
                 $("#subOverlay").fadeIn();
             } else {
                 $("#subOverlay").stop().fadeOut();
             }
         });
	
	
});

 