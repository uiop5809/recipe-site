import styled from 'styled-components';

export default function Recipe({
	id,
	title,
	subtitle,
	desc,
	coverImg,
	totalTime,
}) {
	const Container = styled.div`
		width: 1100px;
		margin: 0 auto;
	`;
	return (
		<Container>
			<div className={id}>
				<img src={coverImg} alt={title} />
				<div>
					<h2>{title}</h2>
					<h4>{subtitle}</h4>
					<h4>{totalTime}</h4>
					<p>{desc}</p>
				</div>
			</div>
		</Container>
	);
}
