let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

window.addEventListener('load', () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});

const container = document.querySelector('.feedback-form');
container.style.width = '500px';
container.style.height = '500px';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.flexWrap = 'wrap';
container.style.gap = '20px';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';

const containerBody = document.querySelector('.body_style');
containerBody.style.display = 'flex';
containerBody.style.alignItems = 'center';
containerBody.style.justifyContent = 'center';
