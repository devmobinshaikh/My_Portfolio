$(document).ready(function () {
  let $btns = $(".project-area .button-group button");
  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass(".active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });
    false;
  });

$('.project-area .button-group #btn1').trigger('click');


$('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
  });
  $('.site-main .client-area .owl-carousel').owlCarousel(
    {
      loop:true,
      autoplay:true,
      center:true,
      dots:true,
      nav:true,      
      responsive:{
        0:{
          items:1
        },
        544:{
          items:3
        }
      }
    }
  );

  let nav_offset_top =$('.header-area').height()+50;
function navbarFixed(){
  if($('.header-area').length){
    $(window).scroll(function(){
      let scroll =$(window).scrollTop();
      if(scroll >=nav_offset_top){
        $('.header-area .main-menu').addClass('navbar_fixed');
      }
      else{
        $('.header-area .main-menu').removeClass('navbar_fixed');
      }
    })
  }
}
navbarFixed();

});

  