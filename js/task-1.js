const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryTitle = category.querySelector("h2");
  const categoryItems = category.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
