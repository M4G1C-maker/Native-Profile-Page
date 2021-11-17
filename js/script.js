const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLink = document.querySelectorAll('.nav-link'),
  sections = document.querySelectorAll('section[id]');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

navLink.forEach((el) => {
  el.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

const skillContent = document.getElementsByClassName('skill-content'),
  skillHeader = document.querySelectorAll('.skill-header');

skillHeader.forEach((el) => {
  el.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('skill-close')) {
      e.target.parentNode.className = 'skill-content skill-open';
    } else if (e.target.parentNode.classList.contains('skill-open')) {
      e.target.parentNode.className = 'skill-content skill-close';
    }
  });
});
// function toggleSkills() {
//   let itemClass = this.parentNode.className;
//   for (i = 0; i < skillContent.length; i++) {
//     skillContent[i].className = 'skill-content skill-close';
//   }
//   if (itemClass === 'skill-content skill-close') {
//     this.parentNode.className = 'skill-content skill-open';
//   }
// }
// skillHeader.forEach((el) => {
//   el.addEventListener('click', toggleSkills());
// });

// fungsi popup menu
const modalView = document.querySelectorAll('.service-modal'),
  modalBtn = document.querySelectorAll('.service-button'),
  modalClose = document.querySelectorAll('.modal-close');

modalBtn.forEach((elment, i) => {
  elment.addEventListener('click', () => {
    modalView[i].classList.add('modal-active');
  });
});
modalClose.forEach((elment, i) => {
  elment.addEventListener('click', () => {
    modalView[i].classList.remove('modal-active');
  });
});

// fungsi slide
let swiper = new Swiper('.portfolio-container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Fungsi Scroll nav aktif
window.addEventListener('scroll', () => {
  let nilaiPage = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHight / 3) {
      nilaiPage = '#' + section.getAttribute('id');
    }
  });
  navLink.forEach((a) => {
    nilaiAttribute = a.getAttribute('href');
    a.classList.remove('active-link');
    if (nilaiAttribute == nilaiPage) {
      a.classList.add('active-link');
    }
  });
});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('header');
  if (this.pageYOffset >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
});
window.addEventListener('scroll', () => {
  const scrollUp = document.getElementById('scroll-up');
  if (this.pageYOffset >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
});

// const themeButton = document.getElementById('theme-btn');
// const darkTheme = 'dark-theme';
// const iconTheme = 'fa-sun';

// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
// const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun');

// if (selectedTheme) {
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
//   themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
// }

// themeButton.addEventListener('click', () => {
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);

//   localStorage.setItem('selected-theme', getCurrentTheme());
//   localStorage.setItem('selected-icon', getCurrentIcon());
// });
