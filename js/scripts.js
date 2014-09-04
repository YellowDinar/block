$(function() {
	$('.close a').click(function() {
		$('.wrapModal').hide();
	});

	$('.head .btn, .footer .btn, .count2 .btn').click(function() {
		$('.wrapModal').show();
	});

	$('.all .btn').click(function() {
		$('.count2').css('display','inline-block');
	});
});