export default (inputs) => {
  inputs.forEach((input) => {
    const currentInout = input;
    if (!currentInout.classList.contains('form__input--select')) {
      const parent = input.closest('.form__group');
      parent.classList.remove('form__group--value');
      currentInout.value = '';
    }
  });
};
