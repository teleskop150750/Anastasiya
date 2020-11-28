/* eslint-disable no-param-reassign */
export default (modal) => {
  const body = document.querySelector('.page__body');
  const paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  body.style.paddingRight = paddingRight;
  modal.style.paddingRight = paddingRight;
  body.classList.add('page__body--lock');
  modal.style.display = 'flex';
  modal.style.display = getComputedStyle(modal).display;
  modal.classList.add('modal--opening');

  const modalContent = modal.querySelector('.modal__content');
  const opening = () => {
    modal.classList.remove('modal--close');
    modal.classList.remove('modal--opening');
    modal.classList.add('modal--open');
    modalContent.removeEventListener('transitionend', opening);
  };
  modalContent.addEventListener('transitionend', opening);

  const modalClose = (e) => {
    if (e.target === e.currentTarget) {
      modal.classList.add('modal--closing');
      const closing = () => {
        modal.classList.remove('modal--open');
        modal.classList.remove('modal--closing');
        modal.classList.add('modal--close');
        modal.classList.remove('modal--open');
        modal.style.display = 'none';
        modal.removeEventListener('transitionend', closing);
      };
      modal.addEventListener('transitionend', closing);
      modal.style.removeProperty('padding-right');
      body.style.removeProperty('padding-right');
      body.classList.remove('page__body--lock');
    }
  };
  const btnClose = modal.querySelector('.modal__button');
  btnClose.addEventListener('click', modalClose);
  modal.addEventListener('click', modalClose);
};
