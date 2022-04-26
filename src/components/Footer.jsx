import styled from 'styled-components';

export default function Footer() {
	const Foot = styled.footer`
		background: #2c2a29;
		padding: 20px 0;
		p {
			color: #fff;
			margin: 10px 0;
		}
	`;
	const Container = styled.div`
		width: 1100px;
		margin: 0 auto;
	`;
	return (
		<Foot>
			<Container>
				<p>만든이: 박예진, 정태우</p>
				<p>© 2022 SSI, All rights reserved.</p>
			</Container>
		</Foot>
	);
}
