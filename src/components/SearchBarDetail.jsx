import useRecipes from "./../hooks/useRecipes";
import Recipe from "./Recipe";
import { useParams } from "react-router-dom";
import Category from "./Category";

export default function SearchBarDetail() {
  const recipes = useRecipes();
  const { id } = useParams();

  return (
    <>
      <Category />
      <div>
        {recipes
          .filter((recipe) => recipe.title === { id }.id)
          .map((recipe) => (
            <Recipe
              id={recipe.id}
              title={recipe.title}
              subtitle={recipe.subtitle}
              desc={recipe.desc}
              coverImg={recipe.coverImg}
              totalTime={recipe.totalTime}
            />
          ))}
      </div>
    </>
  );
}
