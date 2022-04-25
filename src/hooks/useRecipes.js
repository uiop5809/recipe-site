import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

export default function useRecipes() {
	// 데이터를 Get하기
	const { recipes } = useContext(AppStateContext);

	return recipes;
}
