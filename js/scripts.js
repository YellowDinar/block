$(function() {
	$('.close a').click(function() {
		$('.wrapModal').hide();
	});

	$('.head .btn').click(function() {
		$('.wrapModal').show();
	});
	$('.footer .btn').click(function() {
		$('.wrapModal').show();
	});
});