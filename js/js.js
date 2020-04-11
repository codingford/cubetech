$( function() {
  $('.accordion').accordion();
  });
  
 
$('.flowing-scroll').on('click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); 
    if(dest !== undefined && dest !== '') { 
      $(this).addClass('active');
        $('html').animate({ 
            scrollTop: $(dest).offset().top 
        }, 500 
        );
    }
    return false;
});
$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

let slider = $('.slider-item');
slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY > 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));



let menToggler = document.querySelector('.toggler');
let fullNav = document.querySelector('.full-navigation');
let modal = document.querySelector('.modal');
let modal1 = document.querySelector('.modal1');
let modal2 = document.querySelector('.modal2');
let modal3 = document.querySelector('.modal3');
let modal4 = document.querySelector('.modal4');
let modalItem1 = document.querySelector('.item1');
let modalItem2 = document.querySelector('.item2');
let modalItem3 = document.querySelector('.item3');
let modalItem4 = document.querySelector('.item4');


menToggler.addEventListener('click', function(evt){
  evt.preventDefault();
    fullNav.classList.toggle('mob-nav');

    console.log('luck')
});

modal1.addEventListener('click', function(evt){
  evt.preventDefault();
    modal.classList.toggle('modal1-show');
    modalItem1.classList.add('show');
    console.log('luck pop up 1')
});



// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.zz07i6JRSt-jNCtOuDaSsQ);
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);




