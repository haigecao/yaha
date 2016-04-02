;$(function () {

	var mainScroll = new IScroll('#main-wrapper', { 
		mouseWheel: true,
		
	});
	var navScroll = new IScroll('#nav-wrapper', { mouseWheel: true });
	// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	// 
	$(document).on('touchmove', function (e) { e.preventDefault(); });

})