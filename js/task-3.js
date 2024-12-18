const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');
inputEl.addEventListener('input', event => {
    if (inputEl.value.trim() === '') {
       spanEl.textContent = 'Anonimus';
    } else {
        spanEl.textContent = inputEl.value;
    }
})