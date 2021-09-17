const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector("#value");

const increment = () => value.textContent++;
const decrement = () => value.textContent--;

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);
