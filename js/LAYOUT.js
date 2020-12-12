
// header button animation
$(document).ready(function(){
  $('#box1').click(function(){
    $('#box3').css('display','none');
    $('#box1').css('display','none');
    $('#box2').css('display','block');
    $('.hidden-drop-menu').slideUp(500);
  });
});
$(document).ready(function(){
  $('#box2').click(function(){
    $('#box3').css('display','none');
    $('#box2').css('display','none'); 
    $('#box1').css('display','block');
    $('.hidden-drop-menu').slideDown(500);
  });
});
$(document).ready(function(){
  $('#box3').click(function(){
    $('#box3').css('display','none');
    $('#box2').css('display','none'); 
    $('#box1').css('display','block');
    $('.hidden-drop-menu').slideDown(500);
  });
});


// child menu item
$(document).ready(function(){
  $('.pre-hid').click(function(){
    $(this).parent().find('.child-menu').slideToggle(500);
    $(this).parent().find('span').toggleClass('button-rotate');
  });
});

//grand child menu
$(document).ready(function(){
  $('.pre-hid-child').click(function(){
    $(this).parent().find('.grandchild-menu').slideToggle(500);
  });
});

//back to top
$(document).ready(function(){
  $(window).scroll(function(){
    var pos = $('html,body').scrollTop();
    if(pos>500){
      $('.backToTop').attr('style','visibility:visible; bottom: 5%;')
    }
    else{
      $('.backToTop').attr('style','visibility:hidden;')
    }
  });
  $('.backToTop').click(function() {
      $('html,body').animate({scrollTop: 0},1000);
   });
});


//video
$(document).ready(function(){
  $('.vidBtn').click(function(){
    $('#video').css('display','block');
  });
});

$(document).ready(function(){
  window.addEventListener('mouseup',function(event){
    var pvid = document.getElementById('pvid');
    var video = document.getElementById('video');
    if(event.target != pvid && event.target.parentNode != pvid){
             video.style.display = 'none';
             document.getElementById('pvid').pause();
          }
  });
});


//page loading = fail
  $(window).load(function(){
    $('.wrapper').css('display','block');
      // $('.load').delay(1000).fadeOut('fast');
    $('.load').css('display','none');
  });