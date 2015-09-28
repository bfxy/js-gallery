// Run stuff
$(window).load(function () {
	stopSlideshow();
	thumbHandler();
	//hideFirst();
	//hideLast();
	//showControls('.carousel', '.controls');
	//showControls('.thumbnails', '.thumb-controls');
	//showControls('.thumbnails', '.thumbs');
	// navigation();
});

// Keyboard controls
$(document).bind('keyup', function (e) {
	if (e.which==39) {
		$('.carousel').carousel('next');
	}   
	else if (e.keyCode==37) {
		$('.carousel').carousel('prev');
	}
});

// Turn off stupid slideshow
function stopSlideshow() {
    $('.carousel').each(function (){
        $(this).carousel({
            interval: false
        });
    });
}


// Show controls when hovering over
function showControls(target, controls) {
	$(target).on('mouseenter', function () {
		$(controls).fadeIn(100);
	});
	$(target).on('mouseleave', function () {
		$(controls).fadeOut(100);
	});
}

// Hide left/right control on first/last photo
function hideFirst() { 
	if ($("#img01").parent().parent().hasClass('active')) {
		$(".left.carousel-control").fadeOut(100);
	} else {
		$(".left.carousel-control").fadeIn(100);
	}
}

function hideLast() {
	if ($("#img10").parent().parent().hasClass('active')) {
		$(".right.carousel-control").fadeOut(100);
	} else {
		$(".right.carousel-control").fadeIn(100);
	}
}

$(function() { 
	$('#carousel').bind('slid.bs.carousel', function (e) {
  	hideFirst();
  	hideLast();
  	});
});

/* function navigation() {
	var ribbonPos = document.getElementById('ribbon').scrollWidth - $(window).width() + 40;
	console.log(ribbonPos);
	$(".right.thumb-control").mouseover(function(){
		var time = ribbonPos*300/200;
			$('.allImages').stop().animate({left: - ribbonPos},time);
			}); 
} */

// Jump to photo from thumbnails
function thumbHandler() {
	$('.thumb-img').on('click', function () {
		var clickedImg = $(this).attr('id');
		$('.carousel').carousel(parseInt(clickedImg));
	});
}





