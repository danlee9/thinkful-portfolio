$(function() {
	var $toggle = $('.toggle');
	$toggle.hide();
	$('button.minimal').on('click', function() {
		$toggle.toggle();
	});
});