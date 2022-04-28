import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './styled-component/Container';

const Head = styled.header`
	background: #fae3d9;
	text-align: center;
	h1 {
		font-size: 50px;
		font-weight: 800;
		padding: 40px 0;
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
