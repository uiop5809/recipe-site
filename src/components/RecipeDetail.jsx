import Container from './styled-component/Container';
import styled from 'styled-components';
import StyledButton from './styled-component/StyledButton';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { MdOutlineTimer } from 'react-icons/md';

const Details = styled.div`
	box-sizing: border-box;
	padding: 10vh 0px;
	height: 75vh;
	display: flex;
	img {
		width: 300px;
		height: 300px;
		margin: 10px 20px auto 20px;
		border-radius: 100px;
	}
	div {
		.title {
			font-size: 24px;
			font-weight: 800;
		}
		.subtitle {
			margin: 10px 0;
		}
		.totalTime {
			margin: 10px 0;
		}
		ol {
			height: 40vh;
			display: flex;
			max-height: 40vh;
			flex-basis: max-content;
			flex-direction: column;
			flex-wrap: wrap;
			li {
				margin: 0px 5px 10px 0px;
				height: 16px;
				padding: 10px;
				background: #e3b7a0;
				border-radius: 10px;
			}
		}
		.goBack {
			width: 3vh;
			height: 3vh;
		}
	}
`;

export default function RecipeDetail({
	id,
	title,
	subtitle,
	coverImg,
	totalTime,
	ingredients,
	step,
}) {
	const navigate = useNavigate();
	return (
		<Container>
			<Details>
				<img src={coverImg} alt="img"></img>
				<div>
					<div className="title">{title}</div>
					<div className="subtitle">{subtitle}</div>
					<div className="totalTime">
						<MdOutlineTimer />
						{totalTime}
					</div>
					<ol>
						{ingredients.map((ingredient) => (
							<li key={ingredient}>{ingredient}</li>
						))}
					</ol>
					<StyledButton
						onClick={() => {
							navigate(-1);
						}}
					>
						<RiArrowGoBackFill className="goBack" />
					</StyledButton>
				</div>
			</Details>
		</Container>
	);
}
