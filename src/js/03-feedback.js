
import throttle from 'lodash.throttle';


// const LOCAL_KEY = 'feedback-form-state';

// form = document.querySelector('.feedback-form');

// form.addEventListener('input', throttle(onInputData, 500));
// form.addEventListener('submit', onFormSubmit);

// let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
// const { email, message } = form.elements;
// reloadPage();

// function onInputData(e) {
//   dataForm = { email: email.value, message: message.value };
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
// }

// function reloadPage() {
//   if (dataForm) {
//     email.value = dataForm.email || '';
//     message.value = dataForm.message || '';
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });

//   if (email.value === '' || message.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   localStorage.removeItem(LOCAL_KEY);
//   e.currentTarget.reset();
//   dataForm = {};
// }




const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();