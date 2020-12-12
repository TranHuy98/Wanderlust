// shcedule and faqs

$(document).ready(function(){
	$('.day').click(function(){
		$('.FIsch').slideUp(300);
		$('.day').css('box-shadow','none');
		if($(this).find('.fullInfo').css('display') == 'none'){
			$(this).find('.fullInfo').slideDown(300);
			$(this).css('box-shadow','0 0 10px 0px #ccc');
		}
		else{
			$(this).find('.fullInfo').slideUp(300);
			$(this).css('box-shadow','none');
		}
	});
});
$(document).ready(function(){
	$('.ask').click(function(){
		$('.FIask').slideUp(300);
		$('.ask').css('box-shadow','none');
		if($(this).find('.fullInfo').css('display') == 'none'){
			$(this).find('.fullInfo').slideDown(300);
			$(this).css('box-shadow','0 0 10px 0px #ccc');
		}
		else{
			$(this).find('.fullInfo').slideUp(300);
			$(this).css('box-shadow','none');
		}
	});
});
	