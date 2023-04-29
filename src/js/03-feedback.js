import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submit = document.querySelector('button');

form.addEventListener('input', throttle(onInput, 5000));

const dataLocalStorage = localStorage.getItem('feedback-form-state');

if (dataLocalStorage) {
  const dataParse = JSON.parse(dataLocalStorage);
  form[0].value = dataParse.email;
  form[1].value = dataParse.message;
}

function onInput(evt) {
  const data = {
    email: evt.target.form[0].value,
    message: evt.target.form[1].value,
  };
  const dataToJson = JSON.stringify(data);

  localStorage.setItem('feedback-form-state', dataToJson);
}

submit.addEventListener('click', OnSubmit);

function OnSubmit(evt) {
  evt.preventDefault();
  form[0].value = '';
  form[1].value = '';
  localStorage.clear();
}
