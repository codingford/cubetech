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

var menToggler = document.querySelector('.toggler'); 
var fullNav = document.querySelector('.full-navigation'); 
var mainNav = document.querySelector('.main-nav');
// var sliderToggler = document.querySelector('#staff-switching-slider');
// var contactNav = document.querySelector('.logo-contact');

menToggler.addEventListener('click', function(evt){
  evt.preventDefault();
    fullNav.classList.toggle('mob-nav');
    mainNav.classList.toggle('respond');
    // sliderToggler.classList.add('slider-item');
    // sliderToggler.classList.toggle('slider-item');
    // socialNav.classList.toggle('hidden');
    // contactNav.classList.toggle('hidden');
    console.log('luck')
});



// function AddNewInf(){};
// function GetInfo(){};

// let newInf = document.querySelector('.new-info');
// newInf.addEventListener('click', function AddNewInf(){
//     let addState = prompt ('enter country');
//     let addCapital = prompt ('enter capital')
// });

// let getInf = document.querySelector('.get-info');
// getInf.addEventListener('click', function GetInfo(){
//     let getInform = prompt ('enter country');
//     let giveInform = alert ('some country')
// });


// let menuOpen = document.getElementById ("menuToggler");
// menuToggler.onclick = function menuToggle() {
//   var miniMenu = document.getElementById("topnav");
//   if (miniMenu.className === "navigation-list") {
//     miniMenu.className += " respond";
//   } else {
//     miniMenu.className = "navigation-list";
//   }
// }


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
