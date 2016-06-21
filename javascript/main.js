(function($) {
	$(document).ready(function() {
		$( ".parallax__layer--back" ).load( "ajax/test.html", function() {
			$('.loaded').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},'slow');
		});
		$.slidebars();
	});
}) (jQuery);