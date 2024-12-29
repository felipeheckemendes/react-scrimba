/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{props.recipeBody}</ReactMarkdown>
      </article>
    </section>
  );
}
