import Recipe from '../components/Recipe';
import useRecipe from '../hooks/useRecipes';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Japanese() {
	const recipes = useRecipe();

	return (
		<div>
			<Header />
			<div>
				{recipes
					.filter((recipe) => recipe.id.clice(0, 1) === 'jp')
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
			<Footer />
		</div>
	);
}
