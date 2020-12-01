import inputsFocus from './scripts/inputsFocus.js';
import modalOpen from './scripts/modalOpen.js';
import formSubmit from './scripts/formSubmit.js';

const modal = document.querySelector('.modal');
const messForm = document.querySelector('.form');
const messInputs = messForm.querySelectorAll('.js-input');
inputsFocus(messInputs);

const cl = () => {
  const modalBody = modal.querySelector('.modal__body');
  let modalBodyValue = '';
  switch (messForm.querySelector('.select-group__select').value) {
    case 'thanks':
      modalBodyValue = `
          <p class="modal__text">Спасибо за благодарность.</p>
          <p class="modal__text">Мы рады что вы остались довольны!</p>
        `;
      break;
    case 'sentence':
      modalBodyValue = `
          <p class="modal__text">Мы обязательно в ближайшее время рассмотрим ваше пожелание.</p>
        `;
      break;
    case 'complaint':
      modalBodyValue = `
          <p class="modal__text">Ваша жалоба будет рассмотренна в ближайщее время.</p>
          <p class="modal__text">Приносим свои извинения.</p>
        `;
      break;
    default:
      break;
  }
  modalBody.innerHTML = modalBodyValue;
  formSubmit(messForm, messInputs, modal, modalOpen);
};

const formSubmitHandler = (e) => {
  e.preventDefault();
  cl(modal);
};

messForm.addEventListener('submit', formSubmitHandler);
