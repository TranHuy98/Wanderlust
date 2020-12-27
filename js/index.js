//slide
$(document).ready(function(){
	$('.discover-slide').slick({
	  	dots: true,
	  	autoplay: true,
	 	infinite: true,
	  	speed: 1000,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	responsive: [
	    	{
	      		breakpoint: 1200,
	      		settings: {
	        	slidesToShow: 2,
	        	slidesToScroll: 1,
	        	infinite: true,
	        	dots: true
	      		}
	    	},
	    	{
	      		breakpoint: 576,
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

//
$(document).ready(function(){
	$('.review-slide').slick({
	 	infinite: true,
	 	autoplay: true,
	  	speed: 1000,
	  	prevArrow: '.prevRev',
      	nextArrow: '.nextRev',
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	responsive: [
	    	{
	      		breakpoint: 992,
	      		settings: {
	        	slidesToShow: 2,
	        	slidesToScroll: 1,
	        	infinite: true,
	      		}
	    	},
	    	{
	      		breakpoint: 576,
	      		settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1,
	        	infinite: true,
	      		}
	    	},
	  	]
	});
})

//date-time
$(document).ready(function(){
      var date_input=$('input[name="date"]');
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    });