const input = document.querySelector("#name-input");
const nameOfOutput = document.querySelector("#name-output");

input.addEventListener("input", (event) =>
  event.currentTarget.value !== ""
    ? (nameOfOutput.textContent = event.currentTarget.value)
    : (nameOfOutput.textContent = "незнакомец")
);
