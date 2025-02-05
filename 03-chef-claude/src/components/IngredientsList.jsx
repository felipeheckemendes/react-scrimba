<<<<<<< HEAD
/* eslint-disable react/prop-types */
export default function IngredientsList(props) {
  const { ingredients, getAndShowRecipe, reference } = props;
=======
export default function IngredientsList(props) {
  const { ingredients, toggleRecipe } = props;
>>>>>>> 69bb201f38718adb4c58e9bb1bdb81e5c5158afa

  // Generate React objects (elements) from array
  let ingredientsElements = ingredients.map(function (ingredient) {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsElements}
      </ul>
      {ingredientsElements.length >= 3 ? (
        <div className="get-recipe-container">
<<<<<<< HEAD
          <div ref={reference}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getAndShowRecipe}>Get a recipe</button>
=======
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={toggleRecipe}>Get a recipe</button>
>>>>>>> 69bb201f38718adb4c58e9bb1bdb81e5c5158afa
        </div>
      ) : null}
    </section>
  );
}
