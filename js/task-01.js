let allCategoriesRef = document.querySelectorAll(".item");

console.log(`В списке ${allCategoriesRef.length} категории`);

allCategoriesRef.forEach((category) => {
  let h2Ref = category.querySelector("h2");
  let subList = category.querySelectorAll("li");
  console.log(`Категория: ${h2Ref.textContent}`);
  console.log(`Количество элементов ${subList.length}`);
});
