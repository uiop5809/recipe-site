import { useParams } from "react-router-dom";
import IngredientDetail from "../components/IngredientDetail";
import useRecipes from "../hooks/useRecipes";

export default function Ingredient() {
  const { id } = useParams();
  const recipes = useRecipes();

  return (
    <div>
      {recipes
        .filter((recipe) => recipe.id === { id }.id)
        .map((recipe) => (
          <IngredientDetail
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            subtitle={recipe.subtitle}
            coverImg={recipe.coverImg}
            totalTime={recipe.totalTime}
            ingredients={recipe.ingredients}
            step={recipe.step}
          />
        ))}
    </div>
  );
}
