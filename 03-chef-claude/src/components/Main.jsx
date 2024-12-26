import { useState } from "react";

import { getRecipeFromChefClaude } from "./ai";

import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  // STATE ingredient list
  const [ingredients, setIngredients] = useState([]);

  // STATE: recipe Shown?
  const [recipeShown, setRecipeShown] = useState(false);

  // HANDLER: ingredient addition submission
  const submitHandler = function (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const addedIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, addedIngredient]);
    event.currentTarget.reset();
  };

  // HANDLER: toggle recipe shown
  const toggleRecipe = function (event) {
    event.preventDefault();
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
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
          toggleRecipe={toggleRecipe}
        />
      ) : null}

      {recipeShown ? <ClaudeRecipe /> : null}
    </main>
  );
}
