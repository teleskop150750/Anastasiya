import formDefault from './formDefault.js';
import modalOpen from './modalOpen.js';

export default (form, inputs) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isErrors = false;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        isErrors = true;
        const parent = input.closest('.form__group');
        parent.classList.add('form__group--error');
      }
    });

    if (!isErrors) {
      formDefault(inputs);
      const modal = document.querySelector('.modal');
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
      modalOpen(modal);
    }
  });
};
