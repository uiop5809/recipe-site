import useRecipes from './../hooks/useRecipes';
import Recipe from './Recipe';
import { useParams } from 'react-router-dom';
import Category from './Category';
import styled from 'styled-components';

const StyledSearchBarDetail = styled.div`
	min-height: 73.5vh;
`;

export default function SearchBarDetail() {
	const recipes = useRecipes();
	const { id } = useParams();

	return (
		<StyledSearchBarDetail>
			<Category />
			<div>
				{recipes
					.filter((recipe) => recipe.title.includes({ id }.id))
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
		</StyledSearchBarDetail>
	);
}
