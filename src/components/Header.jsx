import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './styled-component/Container';

const Head = styled.header`
	background-color: #fae3d9;
	text-align: center;
	height: 15vh;
	h1 {
		font-size: 5vh;
		font-weight: 800;
		padding: 3.3vh 0;
		a {
			text-decoration: none;
			color: #632626;
		}
	}
`;

export default function Header() {
	return (
		<Head>
			<Container>
				<h1>
					<Link to="/">Recipe site</Link>
				</h1>
				<div> 검색 부분 </div>
			</Container>
		</Head>
	);
}
