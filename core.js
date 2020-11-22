// navToggle

const nav = document.querySelector('.nav__list');
const navToggle = function f() {
  this.removeEventListener('click', navToggle);

  if (!nav.classList.contains('nav__list--open')) {
    nav.classList.add('nav__list--opening');
    nav.style.height = `${nav.scrollHeight}px`;

    this.classList.remove('nav-button--open');
    this.classList.add('nav-button--close');

    const transitionShow = () => {
      nav.classList.remove('nav__list--opening');
      nav.classList.add('nav__list--open');
      nav.removeEventListener('transitionend', transitionShow);
      this.addEventListener('click', navToggle);
    };

    nav.addEventListener('transitionend', transitionShow);
  } else {
    nav.style.height = '0px';

    this.classList.remove('nav-button--close');
    this.classList.add('nav-button--open');

    const transitionHidden = () => {
      nav.removeAttribute('style');
      nav.classList.remove('nav__list--open');
      nav.removeEventListener('transitionend', transitionHidden);
      this.addEventListener('click', navToggle);
    };
    nav.addEventListener('transitionend', transitionHidden);
  }
};
const navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', navToggle, false);
