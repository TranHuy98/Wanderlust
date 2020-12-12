//slide
$(document).ready(function(){
	$('.related').slick({
	 	infinite: true,
	  	speed: 300,
	  	prevArrow: '.prevPost',
      	nextArrow: '.nextPost',
	  	slidesToShow: 2,
	  	slidesToScroll: 1,
	  	responsive: [
	    	{
	      		breakpoint: 576,
	      		settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1,
	        	infinite: true,
	      		}
	    	}
	  	]
	});
})

//customize button
$(document).ready(function(){
	$('.prevPost').click(function(){
		$(this).css('color','#3fced3');
		$('.nextPost').css('color','#ccc');
	});
	$('.nextPost').click(function(){
		$(this).css('color','#3fced3');
		$('.prevPost').css('color','#ccc');
	});
})