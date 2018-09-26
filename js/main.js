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

$(document).ready(function() {
	var largura = $(this).width();

	if( largura >= 1440 ) {
		$('.x').css({
			right: '-250px'
		});

		$('.boy').css({
			right: '17px'
		});
	}
});