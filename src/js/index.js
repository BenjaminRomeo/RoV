jQuery(document).ready(function($){
	$(window).resize(function(){
		$('h1, p').css('z-index', 'auto'); 
		if($(window).width()>1920)
		{

		}
	});
	$(window).trigger('resize');
	$('.tooltipped').tooltip({delay: 30});
});