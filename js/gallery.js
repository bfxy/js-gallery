// Turn off stupid slideshow
$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});

// Keyboard controls
$(document).bind('keyup', function(e) {
	if(e.which==39){
		$('.carousel').carousel('next');
	}   
	else if(e.keyCode==37){
		$('.carousel').carousel('prev');
	}
});

// Toggle controls when hovering over body
$(document).ready(function() {
	$('body').on('mouseenter', function() {
		//$('.controls').css({'display': 'none'})
		$('.controls').fadeIn();
	});
	$('body').on('mouseleave', function() {
	//$('.controls').css({'display': 'none'})
	$('.controls').fadeOut();
	});
});