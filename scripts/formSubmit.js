import formDefault from './formDefault.js';

export default (form, inputs, modal, cl) => {
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
    cl(modal);
  }
};
