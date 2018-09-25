$(document).scroll(function(handler) {
	if( $(this).scrollTop() > 80 ) {
		$('.navbar').addClass('fixed');
	} else {
		$('.navbar').removeClass('fixed');
	}

	$('.mask-x').css({
		'background-position' : 'right -' + ( $(this).scrollTop() - 80) + 'px'
	});
});