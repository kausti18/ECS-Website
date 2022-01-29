$(document).ready(function(){
  $(window).on('scroll', function(e){
    var position = $(window).scrollTop();
   // console.log(position);
    if((position > 188 )&& (position< 600)) {
      
       $("#slide1").addClass("slideUp");
       
    }
     if((position >= 600) && (position < 1036)){
        $("#slide2").addClass("slideUp");
    }
     if((position >= 1036) && (position < 1493)){
        $("#slide3").addClass("slideUp");
    }
     if((position >= 1493) && (position < 2080)){
        $("#slide4").addClass("slideUp");
    }
     if((position >= 2080) && (position < 2675)){
        $("#slide5").addClass("slideUp");
    }

    
  });
});