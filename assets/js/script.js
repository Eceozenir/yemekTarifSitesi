const recipesList = document.querySelector(".recipesList");
const modalContainer = document.querySelector("#modalContainer");
const modalContent = document.getElementById("modalContent");
const BASE_URL = "https://dummyjson.com/recipes";

async function getItem() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}

async function printItem() {
    const data = await getItem();
    for (const recipes of data.recipes) {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("urunBilgisi");

        const detailsButton = document.createElement("a");
        detailsButton.href = "#";
        detailsButton.classList.add("myBtns");
        detailsButton.textContent = "detay";
        detailsButton.onclick = () => openModal(recipes);

        recipeItem.innerHTML = `
            <li class="recipesId">${recipes.id}</li>
            <li class="recipesName">${recipes.name}</li>
            <img class="images" src="${recipes.image}" alt="">
        `;
        recipeItem.appendChild(detailsButton);
        recipesList.appendChild(recipeItem);
    }
}

printItem();

function openModal(recipe) {
    modalContent.innerHTML = `
        <li>${recipe.ingredients}</li>
        <li>${recipe.instructions}</li>
        <li>${recipe.difficulty}</li>
    `;
    modalContainer.style.display = "block";
}

function modalClosing() {
    modalContainer.style.display = "none";
}