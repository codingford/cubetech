$( function() {
  $('.accordion').accordion();
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
    modal.classList.add('modal-show');
    modalItem1.classList.add('show');
    console.log('luck pop up 1')
});
modal2.addEventListener('click', function(evt){
  evt.preventDefault();
    modal.classList.add('modal-show');
    modalItem2.classList.add('show');
    console.log('luck pop up 2')
});
modal3.addEventListener('click', function(evt){
  evt.preventDefault();
    modal.classList.add('modal-show');
    modalItem3.classList.add('show');
    console.log('luck pop up 3')
});
modal4.addEventListener('click', function(evt){
  evt.preventDefault();
    modal.classList.add('modal-show');
    modalItem4.classList.add('show');
    console.log('luck pop up 4')
});
modal.addEventListener('click', function(evt){
  evt.preventDefault();
    modal.classList.remove('modal-show');
    modalItem1.classList.remove('show');
    modalItem2.classList.remove('show');
    modalItem3.classList.remove('show');
    modalItem4.classList.remove('show');
    console.log('pop up removed')
});

