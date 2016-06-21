(function($) {
	$(document).ready(function() {
		// $(window).load(function(){
			$('.loaded').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},'slow');
		});
		$.slidebars();
	// });
}) (jQuery);