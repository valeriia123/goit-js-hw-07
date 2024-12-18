function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxControls = document.getElementById('controls');
const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
console.log(boxControls);
console.log(inputEl);
console.log(createBtnEl);
console.log(destroyBtnEl);

inputEl.addEventListener('click', event => {
  if (Number(event.target.value) >= 100) {
    event.target.value = 100;
 }
});

function createBoxes(amount) {
  destroyBoxes();
  let amountNum = Number(amount);

  if (amountNum > 0) {
    for (let i = 0; i < amountNum; i++) {
      const newBox = document.createElement('div');
      newBox.classList.add('new-boxes')
      newBox.textContent = `${i + 1}`;
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.height = `${30 + i * 10}px`;
      newBox.style.width = `${30 + i * 10}px`;
      boxControls.append(newBox);
    }
  }
  inputEl.value = '';
}

createBtnEl.addEventListener('click', () => createBoxes(Number(inputEl.value)));

function destroyBoxes() {
  const newBoxesEl = document.querySelectorAll('.new-boxes');
  newBoxesEl.forEach(box => box.remove());
}

destroyBtnEl.addEventListener('click', destroyBoxes);

