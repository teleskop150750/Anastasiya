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
    }
    const modal = document.querySelector('.modal');
    modalOpen(modal);
  });
};
