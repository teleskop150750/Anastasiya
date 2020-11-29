import inputsFocus from './scripts/inoutsFocus.js';
import modalOpen from './scripts/modalOpen.js';
import formSubmit from './scripts/formSubmit.js';

const messForm = document.querySelector('.form');
const modal = document.querySelector('.modal');
const messInputs = messForm.querySelectorAll('.form__input');
inputsFocus(messInputs);

const cl = () => {
  const modalBodu = modal.querySelector('.modal__body');
  let mmodalBoduValue = '';
  switch (document.querySelector('.form__input--select').value) {
    case 'thanks':
      mmodalBoduValue = `
          <p class="modal__text">Спасибо за благодарность.</p>
          <p class="modal__text">Мы рады что вы остались довольны!</p>
        `;
      break;
    case 'sentence':
      mmodalBoduValue = `
          <p class="modal__text">Мы обязательно в ближайшее время рассмотрим ваше пожелание.</p>
        `;
      break;
    case 'complaint':
      mmodalBoduValue = `
          <p class="modal__text">Ваша жалоба будет рассмотренна в ближайщее время.</p>
          <p class="modal__text">Приносим свои извинения.</p>
        `;
      break;
    default:
      break;
  }
  modalBodu.innerHTML = mmodalBoduValue;
  formSubmit(messForm, messInputs, modal, modalOpen);
};

const formSubmitHandler = (e) => {
  e.preventDefault();
  cl();
};

messForm.addEventListener('submit', formSubmitHandler);
