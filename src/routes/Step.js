import useRecipes from "./../hooks/useRecipes";
import { useParams } from "react-router-dom";
import StepDetail from "./../components/StepDetail";

export default function Step() {
  const { id } = useParams();
  const recipes = useRecipes();

  return (
    <div>
      {recipes
        .filter((recipe) => recipe.id === { id }.id)
        .map((recipe) => (
          <StepDetail key={recipe.id} step={recipe.step} />
        ))}
    </div>
  );
}
