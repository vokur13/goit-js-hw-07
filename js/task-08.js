const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

// Способ 1

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (password === '' || mail === '') {
    alert('Fill all fields with data!');
  } else {
    console.log({ mail, password });
    form.reset();
  }
}

// Способ 2

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     if (value !== '') {
//       console.log({ name, value });
//     }
//     alert('Fill all fields with data!');
//   });
//   form.reset();
// }
