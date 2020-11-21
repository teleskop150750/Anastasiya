// navToggle

const nav = document.querySelector('.nav__list');
const navToggle = (e) => {
  const { target } = e;
  target.removeEventListener('click', navToggle);

  if (!nav.classList.contains('nav__list--open')) {
    nav.classList.add('nav__list--opening');
    nav.style.height = `${nav.scrollHeight}px`;

    target.classList.remove('nav-button--open');
    target.classList.add('nav-button--close');

    const transitionShow = () => {
      nav.classList.add('nav__list--open');
      nav.classList.remove('nav__list--opening');
      nav.removeEventListener('transitionend', transitionShow);
      target.addEventListener('click', navToggle);
    };

    nav.addEventListener('transitionend', transitionShow);
  } else {
    nav.style.height = '0px';

    target.classList.remove('nav-button--close');
    target.classList.add('nav-button--open');

    const transitionHidden = () => {
      nav.removeAttribute('style');
      nav.classList.remove('nav__list--open');
      nav.removeEventListener('transitionend', transitionHidden);
      target.addEventListener('click', navToggle);
    };
    nav.addEventListener('transitionend', transitionHidden);
  }
};
const navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', navToggle, false);
