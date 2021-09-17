const buttonRender = document.querySelector('[data-action="render"]');
const buttonDestroy = document.querySelector('[data-action="destroy"]');
const listBoxes = document.querySelector("#boxes");
const controlsForm = document.querySelector("#controls");
const input = controlsForm.firstElementChild;

function getRandom() {
  const result = [];
  result.push(Math.ceil(Math.random() * (256 - 0) + 0));
  result.push(Math.ceil(Math.random() * (256 - 0) + 0));
  result.push(Math.ceil(Math.random() * (256 - 0) + 0));
  return result;
}

buttonRender.addEventListener("click", () => {
  const result = [];
  let size = 30;

  for (let current = 0; current < input.value; current += 1) {
    const newElement = document.createElement("div");
    newElement.style.background = `rgb(${getRandom()})`;
    newElement.style.width = `${size}px`;
    newElement.style.height = `${size}px`;
    size += 10;
    result.push(newElement);
  }

  input.value = null;
  return listBoxes.append(...result);
});

buttonDestroy.addEventListener("click", () => (listBoxes.innerHTML = ""));
