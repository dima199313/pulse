AOS.init();
$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/icon/prev.png"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/icon/next.png"/></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  //валидатор форм
  const validatorForm = function (form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: '*Пожалуйста укажите свое имя',
        phone: '*Пожалуйста укажите свой номер',
        email: {
          required: '*Пожалуйста укажите свою почту',
          email: '*Введен некоректный адрес',
        },
      },
    });
  };
  validatorForm('.form1');
  validatorForm('.form2');
  validatorForm('.form3');

  //маска номера
  //Убрать в html type number
  $('input[name = phone]').mask('+375 (99) 999-99-99');


});

//tabs
const contentWrapper = document.querySelectorAll('.product__content-wrapper');
const contentLink = document.querySelectorAll('.product__link');
const contentLinkBack = document.querySelectorAll('.product__back-link');
const tabsBtn = document.querySelectorAll('.catalog__tab');
const tabsItem = document.querySelectorAll('.catalog__content');

const contentToogle = function (link) {
  link.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      e.target
        .closest('.product__content-wrapper')
        .classList.toggle('product__content-wrapper--active');
    });
  });
};

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    contentLinkBack.forEach(item => {
      item
        .closest('.product__content-wrapper')
        .classList.remove('product__content-wrapper--active');
    });
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');

    let currentItem = document.querySelector(tabId);

    tabsBtn.forEach(function (item) {
      item.classList.remove('catalog__tab--active');
    });

    tabsItem.forEach(function (item) {
      item.classList.remove('catalog__content--active');
    });

    currentBtn.classList.add('catalog__tab--active');
    currentItem.classList.add('catalog__content--active');
  });
});

contentToogle(contentLink);
contentToogle(contentLinkBack);

//modal

const btnsModalWindow = document.querySelectorAll('button[data-modal]');
const overlay = document.querySelector('.overlay');
const modalConsultationWindow = document.querySelector('.modal__consultation');
const modalBasketWindow = document.querySelector('.modal__basket');
const modalThanksWindow = document.querySelector('.modal__thanks');
const btnCloseShowModalWindow = document.querySelectorAll('.modal__btn-cloce');
const formBtns = document.querySelectorAll('.form-btn');

btnsModalWindow.forEach(item => {
  if (item.dataset.modal === 'consultation') {
    item.addEventListener('click', e => {
      e.preventDefault();
      overlay.classList.remove('overlay--close');
      modalConsultationWindow.classList.add('modal__consultation--active');
    });
    btnCloseShowModalWindow.forEach(item => {
      item.addEventListener('click', e => {
        setTimeout(() => {
          overlay.classList.add('overlay--close');
        }, '300');
        modalConsultationWindow.classList.remove('modal__consultation--active');
      });
    });
  }

  if (item.dataset.modal === 'product') {
    item.addEventListener('click', e => {
      e.preventDefault();
      const textCardTitle = e.target
        .closest('.catalog__item')
        .querySelector('.product__title').textContent;

      // console.log(e.target.closest('.catalog__item').querySelector('.product__title').textContent);
      overlay.classList.remove('overlay--close');
      modalBasketWindow.classList.add('modal__basket--active');
      document.querySelector('.modal__description-basket').textContent =
        textCardTitle;
      btnCloseShowModalWindow.forEach(item => {
        item.addEventListener('click', e => {
          setTimeout(() => {
            overlay.classList.add('overlay--close');
          }, '300');
          modalBasketWindow.classList.remove('modal__basket--active');
        });
      });
    });
  }
});

/*
formBtns.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    console.log(e.target);
    modalBasketWindow.classList.remove('modal__basket--active')
    modalConsultationWindow.classList.remove('modal__consultation--active')

    //временный таймаут 
    setTimeout(() => {
      overlay.classList.add('overlay--close')
    }, '300');
    // modalThanksWindow.classList.add('modal__thanks--active')


    // btnCloseShowModalWindow.forEach((item)=>{
    //   item.addEventListener('click', (e)=>{
    //     setTimeout(() => {
    //       overlay.classList.add('overlay--close')
    //     }, '300');
    //     modalThanksWindow.classList.remove('modal__thanks--active')
    //   })
    // })
  })
})

*/

const scrolNextLink = document.querySelector('.scrolNext')
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 600 ) {
    scrolNextLink.classList.add('scrolNext--active')
  } else {
    scrolNextLink.classList.remove('scrolNext--active')
  }

});
//Плавный скролл к якорю
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});


