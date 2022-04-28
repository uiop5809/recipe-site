import styled from 'styled-components';

const StyledButton = styled.button`
	background: #bf8b67;
	border-radius: 5px;
	border: 2px solid white;
	color: white;
	margin: 0 auto;
	padding: 6px 11px;
	font-size: 15px;
	cursor: pointer;
	&:hover {
		background: #632626;
	}
	transition: 0.3s;
	a {
		text-decoration: none;
		color: white;
	}
`;
export default StyledButton;
