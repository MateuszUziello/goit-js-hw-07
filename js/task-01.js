const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
const numberOfCategiries = categoryItems.length;

console.log(`Number of categories: ${numberOfCategiries}`);

categoryItems.forEach((categoryItem) => {
    const categoryTitle = categoryItem.querySelector("h2").textContent;
    const elementsInCategory = categoryItem.querySelectorAll("li", "ul").length;
    console.log(`Category: ${categoryTitle}`);
    console.log("elements:", elementsInCategory);
});

