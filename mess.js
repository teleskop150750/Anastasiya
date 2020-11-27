import inputsFocus from './scripts/inoutsFocus.js';
import formSubmit from './scripts/formSubmit.js';

const messForm = document.querySelector('.form');
const messInputs = document.querySelectorAll('.form__input');
inputsFocus(messInputs);
formSubmit(messForm, messInputs);
