export default (inputs) => {
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      const parent = input.closest('.form__group');
      parent.classList.remove('form__group--error');
      parent.classList.add('form__group--focus', 'form__group--value');
    });
    input.addEventListener('blur', function f() {
      const parent = input.closest('.form__group');
      if (this.value.trim() === '') {
        parent.classList.remove('form__group--value');
        this.value = '';
      }
      parent.classList.remove('form__group--focus');
    });
  });
};
