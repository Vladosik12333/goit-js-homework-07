const itemOfCategory = document.querySelectorAll(".item");

console.log(`В списке ${itemOfCategory.length} категории.`);

const titleOfItem = (item) => {
  const title = item.firstElementChild.textContent;
  return `Категория: ${title}`;
};

const countElementsOfList = (item) => {
  const listOfItemCategory = item.lastElementChild.children.length;
  return `Количество элементов: ${listOfItemCategory}`;
};

itemOfCategory.forEach((item) => {
  console.log(titleOfItem(item));
  console.log(countElementsOfList(item));
});
