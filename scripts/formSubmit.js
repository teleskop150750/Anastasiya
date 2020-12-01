import formDefault from './formDefault.js';

export default (form, inputs, modal, cl) => {
  let isEmpty = false;

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      isEmpty = true;
      const classGroup = input.classList.item(0).replace(/__.+/, '');
      const group = input.closest(`.${classGroup}`);
      console.log(classGroup);
      console.log(group);

      group.classList.add(`${classGroup}--error`);
    }
  });

  if (!isEmpty) {
    formDefault(inputs);
    cl(modal);
  }
};
