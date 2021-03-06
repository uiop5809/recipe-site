import Recipe from '../components/Recipe';
import useRecipe from '../hooks/useRecipes';
import Category from '../components/Category';

export default function Korean() {
	const recipes = useRecipe();

	return (
		<div>
			<Category />
			<div>
				{recipes
					.filter((recipe) => recipe.id.slice(0, 2) === 'kr')
					.map((recipe) => (
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
