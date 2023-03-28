$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed: 1200,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="/src/icons/chevron-left-solid.png" alt="left chevron"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="/src/icons/chevron right solid.png" alt="right chevron"</button>',
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                  }
                },
              ]
        }
    );
  });

