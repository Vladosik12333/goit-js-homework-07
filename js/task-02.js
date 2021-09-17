const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listOfIngredients = document.querySelector("#ingredients");

const newElemenets = ingredients.map((el) => {
  const newEl = document.createElement("li");

  newEl.textContent = el;

  return (el = newEl);
});

listOfIngredients.append(...newElemenets);
