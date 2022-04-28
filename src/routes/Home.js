import Recipe from '../components/Recipe';
import useRecipe from '../hooks/useRecipes';
import Category from '../components/Category';

export default function Home() {
	const recipes = useRecipe();

	return (
		<div>
			<Category />
			<div>
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.id}
						id={recipe.id}
						title={recipe.title}
						subtitle={recipe.subtitle}
						desc={recipe.desc}
						coverImg={recipe.coverImg}
						totalTime={recipe.totalTime}
					/>
				))}
			</div>
		</div>
	);
}
