<<<<<<< HEAD
import { useState, useRef, useEffect } from "react";

import { getRecipeFromChefClaude } from "../../ai";
=======
import { useState } from "react";

import { getRecipeFromChefClaude } from "./ai";
>>>>>>> 69bb201f38718adb4c58e9bb1bdb81e5c5158afa

import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  // STATE ingredient list
  const [ingredients, setIngredients] = useState([]);

  // STATE: recipe Shown?
  const [recipeShown, setRecipeShown] = useState(false);
<<<<<<< HEAD
  const [recipe, setRecipe] = useState("No recipe to display");

  // REFS
  const recipeSection = useRef(null);

  // EFFECTS
  useEffect(() => {
    if (recipe && recipeSection.current)
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
  }, [recipe]);
=======
>>>>>>> 69bb201f38718adb4c58e9bb1bdb81e5c5158afa

  // HANDLER: ingredient addition submission
  const submitHandler = function (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const addedIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, addedIngredient]);
    event.currentTarget.reset();
  };

<<<<<<< HEAD
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
=======
  // HANDLER: toggle recipe shown
  const toggleRecipe = function (event) {
    event.preventDefault();
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
>>>>>>> 69bb201f38718adb4c58e9bb1bdb81e5c5158afa
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
<<<<<<< HEAD
          reference={recipeSection}
          ingredients={ingredients}
          getAndShowRecipe={getAndShowRecipe}
        />
      ) : null}

      {recipeShown ? <ClaudeRecipe recipeBody={recipe} /> : null}
=======
          ingredients={ingredients}
          toggleRecipe={toggleRecipe}
        />
      ) : null}

      {recipeShown ? <ClaudeRecipe /> : null}
>>>>>>> 69bb201f38718adb4c58e9bb1bdb81e5c5158afa
    </main>
  );
}
