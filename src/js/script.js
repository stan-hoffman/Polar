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
        });
   
    
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
          $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
  
      function toggleSlide(item) {
          $(item).each(function(i) {
              $(this).on('click', function(e) {
                  e.preventDefault();
                  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
              })
          });
      };
  
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');


      //Modals
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
      });
      $('.button_mini').each(function(i) {
        $(this).on('click', function () {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });
      
      $('#consultation-form').validate();
      $('#consultation form').validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true, 
            }
          },
          messages: {
            name: "Пожалуйста введите свое имя",
            phone: "Пожалуйста введите свой номер телефона",
            email: {
              required: "Пожалуйста введите свой email  ",
              email: "Введите корректную почту по типу name@domain.com"
            }
          }
      });

      function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+38 (000) 000-00-00");
  });