
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var foo = $(this.hash);
			foo = foo.length ? foo : $('[name=' + this.hash.slice(1) + ']');
			if(foo.length) {
				$('html, body').animate({
				scrollTop: foo.offset().top
			}, 1000);
				return false;
			}
		}
	});
});