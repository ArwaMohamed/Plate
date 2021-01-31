$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    
    if(wScroll > $("nav").outerHeight())
    {
        $("nav").addClass("fixed-top") ;
         $("nav").css("backgroundColor","71B85F");
    }
    else{
    $("nav").css("backgroundColor","#71B85F");
    }
    
   
    if(wScroll >500)   
    {
        $("#btnUp").fadeIn(200);
    }
else{
 $("#btnUp").fadeOut(200);

}
$("#btnUp").click(function(){


$("body,html").animate({scrollTop:0},2000)

})
})


function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$('.center').slick({
    centerMode: true,
    arrows: true,
    centerPadding: '60px',
    slidesToShow: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
 
  $(document).ready(function(){
    $('.venobox').venobox();
    $(".slide-section").click(function(){

      let aHref=$(this).attr("href");
     let  profileOffset =$(aHref).offset().top;
  
     $("body,html").animate({scrollTop:profileOffset},2000)
 
     });

});









  
  
  
                  















