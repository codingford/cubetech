

$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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

const slider = $(".slider-item");
slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY > 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));



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
