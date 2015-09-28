// Run stuff
$(window).load(function () {
	stopSlideshow();
	thumbHandler();
	hideFirst();
	hideLast();
	showControls('.carousel', '.controls');
	showControls('.thumbnails', '.thumb-controls');
	showControls('.thumbnails', '.thumbs');
	// navigation();
});

// Keyboard controls
var leftStop = false;
var rightStop = false;

$(document).bind('keyup', function (event) {
	if (event.which==39 && !rightStop) {
		$('.carousel').carousel('next');
	}   
	else if (event.keyCode==37 && !leftStop ) {
		$('.carousel').carousel('prev');
	}
});

// Turn off stupid slideshow
function stopSlideshow() {
    $('.carousel').each(function () {
        $(this).carousel( {
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

// Hide left/right control on initial first/last photo 
function hideFirst() { 
	if ($("img#0").parent().parent().hasClass('active')) {
		$(".left.carousel-control").fadeOut(100);
		leftStop = true;
	} else {
		$(".left.carousel-control").fadeIn(100);
		leftStop = false;
	}
}
function hideLast() {
	if ($("img#9").parent().parent().hasClass('active')) {
		$(".right.carousel-control").fadeOut(100);
		rightStop = true;
	} else {
		$(".right.carousel-control").fadeIn(100);
		rightStop = false;
	}
}

// Hide left/right control after slid to first/last photo
$(function() { 
	$('#carousel').bind('slid.bs.carousel', function () {
  		hideFirst();
  		hideLast();
  	});
});

/* function navigation() {
	var ribbonPos = document.getElementById('ribbon').scrollWidth - $(window).width() + 40;
	console.log(ribbonPos);
	$(".right.thumb-control").mouseover(function(){
		var time = ribbonPos * 300/200;
			$('.allImages').stop().animate({left: - ribbonPos}, time);
			}); 
} */

// Jump to photo from thumbnails
function thumbHandler() {
	$('.thumb-img').on('click', function () {
		var targetImg = $(this).attr('id');
		$('.carousel').carousel(parseInt(targetImg));
	});
}

// Stay on last photo after reload/quit (using HTML5 local storage)
$(function storeLastImage() {
	$('#carousel').on('slid.bs.carousel', function (event) {
		var storageId = parseInt($(event.relatedTarget).find('img').attr("id"));
		localStorage.setItem('lastphoto', storageId);
  	});
});

if (localStorage.getItem('lastphoto')) {
    $('.carousel').carousel(parseInt(localStorage.getItem('lastphoto')));
} else {
	localStorage.setItem('lastphoto', 0);
}