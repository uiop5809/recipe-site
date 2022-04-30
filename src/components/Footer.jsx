import styled from 'styled-components';
import Container from './styled-component/Container';

const Foot = styled.footer`
	background-color: #2c2a29;
	box-sizing: border-box;
	padding: 1.8vh 0;
	height: 10vh;
	p {
		font-size: 1.36vh;
		color: #fff;
		margin: calc((10vh - 6.32vh) / 3) 0;
	}
`;

export default function Footer() {
	return (
		<Foot>
			<Container>
				<p>만든이: 박예진, 정태우</p>
				<p>© 2022 SSI, All rights reserved.</p>
			</Container>
		</Foot>
	);
}
