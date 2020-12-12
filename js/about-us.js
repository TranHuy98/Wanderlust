
//slide
$(document).ready(function(){
	$('.review-slide').slick({
	  	dots: true,
	 	infinite: true,
	  	speed: 300,
	  	slidesToShow: 2,
	  	slidesToScroll: 1,
	  	responsive: [
	    	{
	      		breakpoint: 767,
	      		settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1,
	        	infinite: true,
	        	dots: true
	      		}
	    	}
	  	]
	});
})

//stat
$(document).ready(function(){
  $('.counter').counterUp({
    'time': 5000,
  });
});