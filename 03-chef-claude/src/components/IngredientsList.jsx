/* eslint-disable react/prop-types */
export default function IngredientsList(props) {
  const { ingredients, getAndShowRecipe } = props;

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
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getAndShowRecipe}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
}
