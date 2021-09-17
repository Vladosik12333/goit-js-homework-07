const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.value = 14;

range.addEventListener("input", (event) => {
  const valueOfRange = event.currentTarget.value;
  text.style.fontSize = `${valueOfRange}px`;
});
