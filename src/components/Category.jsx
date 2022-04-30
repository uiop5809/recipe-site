import styled from 'styled-components';
import NavLinks from './NavLinks';
import Container from './styled-component/Container';

const HSearch = styled.div`
	background-color: #fae3d9;
	text-align: center;
	h1 {
		font-size: 50px;
		font-weight: 800;
		padding: 40px 0;
		color: #632626;
	}
`;

export default function Category() {
	return (
		<HSearch>
			<Container>
				<NavLinks />
			</Container>
		</HSearch>
	);
}
