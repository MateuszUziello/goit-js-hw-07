function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = input.value
  createBoxes(amount);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount){
  input.value = "";
  for (let i = 0; i < amount; i++){
    const size = 30 + i * 10;
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(newBox);
  }
}
function destroyBoxes () {
  boxesDiv.innerHTML = "";
}