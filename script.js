const input = document.querySelector('#modo-noturno');
const element = document.querySelector('body');

input.addEventListener("click", () => {
  const modo = input.checked ? 'dark' : 'light';
  element.setAttribute('data-bs-theme', modo);
})