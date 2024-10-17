const feedbackForm = document.querySelector('.feedback-form');

const LS_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
const submitData = localStorage.getItem('feedback-form-state');

if (submitData) {
  const parsedData = JSON.parse(submitData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

feedbackForm.addEventListener('input', handleInput);
function handleInput(event) {
  formData.email = feedbackForm.email.value.trim();
  formData.message = feedbackForm.message.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LS_KEY);
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
}
