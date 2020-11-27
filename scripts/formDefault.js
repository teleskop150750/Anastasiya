export default (inputs) => {
  inputs.forEach((input) => {
    const currentInout = input;
    if (!currentInout.classList.contains('form__input--select')) {
      currentInout.value = '';
    }
  });
};
