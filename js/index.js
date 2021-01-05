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

//checkin checkout icon
$(document).ready(function(){
	$('.banner .booking .item input').mouseenter(function(){
		$(this).parent().find('i').css('color','#3fced3');
	});
	$('.banner .booking .item input').mouseleave(function(){
		$(this).parent().find('i').css('color','black');
	});
	$('.banner .booking .item input').focus(function(){
		$(this).parent().find('i').css('color','#3fced3');
	});
});

//stop video
$(document).ready(function(){
	$( '#stop-video' ).click(function(e){
		var $youTubeUrl = $('#pvid').attr('src');
		// alert(youTubeUrl);
		e.preventDefault();  
		//Then assign the src to null, this then stops the video been playing
		$('#pvid').attr('src', '');

		// Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
		$('#pvid').attr('src',$youTubeUrl);

	});
});