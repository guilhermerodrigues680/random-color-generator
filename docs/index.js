function updateBgColorContainer() {
  const containerColor = document.querySelector('#random-color-container');
  const randomColor = randomColorGenerator.getRandomColor();
  containerColor.style.backgroundColor = randomColor;
}

const btnGenerateColor = document.querySelector('#btn-generate-color');

btnGenerateColor.addEventListener('click', () => updateBgColorContainer());

updateBgColorContainer();
