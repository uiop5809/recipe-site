import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
	input {
		margin-right: 5px;
		border: none;
		border-radius: 2px;
		width: 22vw;
		height: 3vh;
		padding: 1px 5px;
	}
	button {
		background-color: darkgray;
		border: none;
		border-radius: 2px;
		width: 5vw;
		height: 3.2vh;
	}
`;

export default function SearchBar() {
	const [search, setSearch] = useState('');
	const changeSearch = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};
	function click() {
		setSearch('');
	}

	return (
		<StyledSearchBar>
			<input
				type="text"
				value={search}
				placeholder="요리할 음식을 검색하세요."
				onChange={changeSearch}
				id="search"
				autoFocus="autofocus"
			/>
			<Link to={`/search/${search}`}>
				<button type="submit" onClick={click}>
					검색
				</button>
			</Link>
			<script src="s../routes/Search.js"></script>
		</StyledSearchBar>
	);
}
