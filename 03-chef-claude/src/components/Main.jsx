import { useState } from "react";

import { getRecipeFromChefClaude } from "../../ai";

import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  // STATE ingredient list
  const [ingredients, setIngredients] = useState([]);

  // STATE: recipe Shown?
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState("No recipe to display");

  // HANDLER: ingredient addition submission
  const submitHandler = function (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const addedIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, addedIngredient]);
    event.currentTarget.reset();
  };

  // HANDLER: Show recipe
  const getAndShowRecipe = async function (event) {
    event.preventDefault();
    setRecipe("Generating recipe... please wait...");
    setRecipeShown((prevRecipeShown) =>
      prevRecipeShown ? prevRecipeShown : !prevRecipeShown
    );
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    if (recipeMarkdown) setRecipe(recipeMarkdown);
    else setRecipe("Error generating recipe. Please try again.");
  };

  // RETURN HTML
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>+ Add ingredient</button>
      </form>

      {ingredients.length > 0 ? (
        <IngredientsList
          ingredients={ingredients}
          getAndShowRecipe={getAndShowRecipe}
        />
      ) : null}

      {recipeShown ? <ClaudeRecipe recipeBody={recipe} /> : null}
    </main>
  );
}
