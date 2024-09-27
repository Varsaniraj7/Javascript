let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

function addRecipe(event) {
    event.preventDefault();

    const title = document.getElementById('recipe-title').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;
    const cuisine = document.getElementById('recipe-cuisine').value;

    if (title && ingredients) {
        const newRecipe = {
            id: Date.now(),  // Unique identifier
            title,
            ingredients,
            instructions,
            cuisine
        };

        recipes.push(newRecipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        displayRecipes();
        clearForm();
    }
}

function clearForm() {
    document.getElementById('recipe-form').reset();
}

function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const cuisineType = document.getElementById('cuisine-filter').value;

    recipes
        .filter(recipe => {
            const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) || recipe.ingredients.toLowerCase().includes(searchTerm);
            const matchesCuisine = cuisineType === '' || recipe.cuisine === cuisineType;
            return matchesSearch && matchesCuisine;
        })
        .forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            recipeDiv.innerHTML = `
                <h2>${recipe.title}</h2>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                <button onclick="editRecipe(${recipe.id})">Edit</button>
                <button onclick="deleteRecipe(${recipe.id})">Delete</button>
            `;

            recipeList.appendChild(recipeDiv);
        });
}

function editRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    document.getElementById('recipe-title').value = recipe.title;
    document.getElementById('recipe-ingredients').value = recipe.ingredients;
    document.getElementById('recipe-instructions').value = recipe.instructions;
    document.getElementById('recipe-cuisine').value = recipe.cuisine;

    deleteRecipe(id); // Remove the recipe before adding the edited version
}

function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    displayRecipes();
}

// Event Listeners
document.getElementById('recipe-form').addEventListener('submit', addRecipe);
document.getElementById('search-bar').addEventListener('input', displayRecipes);
document.getElementById('cuisine-filter').addEventListener('change', displayRecipes);

// Load recipes on page load
window.onload = displayRecipes;
