const input = document.querySelector("#validation-input");

input.addEventListener("change", (event) => {
  const needLength = event.currentTarget.dataset.length;

  if ([...event.currentTarget.value].length === parseInt(needLength)) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
});
