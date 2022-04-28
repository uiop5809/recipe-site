import Recipe from '../components/Recipe';
import useRecipe from '../hooks/useRecipes';
import Search from '../components/Category';

export default function Western() {
	const recipes = useRecipe();

	return (
		<div>
			<Search />
			<div>
				{recipes
					.filter((recipe) => recipe.id.slice(0, 2) === 'we')
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
