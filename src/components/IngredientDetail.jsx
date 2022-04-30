import Container from './styled-component/Container';
import styled from 'styled-components';
import StyledButton from './styled-component/StyledButton';
import { Link, useNavigate } from 'react-router-dom';
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
		ul {
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
				cursor: pointer;
				input[type='checkbox'] {
					display: none;
				}
				input[type='checkbox'] + label {
					display: inline-block;
					position: relative;
					cusor: pointer;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}
				input[type='checkbox'] + label:active:before,
				input[type='checkbox'] + label:before {
					content: ' ';
					display: inline-block;
					width: 18px;
					height: 18px;
					line-height: 18px;
					margin: -2px 8px 0 0;
					text-align: center;
					vertical-align: middle;
					background: #fff;
					border: 1px solid #cacece;
					border-radius: 3px;
					box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
						inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
				}
				input[type='checkbox']:checked + label:before {
					content: '✔';
					color: #314ca2;
					text-shadow: 1px 1px white;
					background: #fff;
					border-color: #adb8c0;
					box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
						inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
				}
			}
		}
		.goBack {
			width: 3vh;
			height: 3vh;
		}
	}
`;

export default function IngredientDetail({
	id,
	title,
	subtitle,
	coverImg,
	totalTime,
	ingredients,
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
					<ul>
						{ingredients.map((ingredient) => (
							<li>
								<input
									type="checkbox"
									id={ingredient}
									name="ingred"
									key={ingredient}
								/>
								<label htmlFor={ingredient}> {ingredient}</label>
							</li>
						))}
					</ul>
					<StyledButton
						onClick={() => {
							navigate(-1); // 뒤로가기
						}}
					>
						<RiArrowGoBackFill className="goBack" />
					</StyledButton>
					<StyledButton>
						<Link to={`/step/${id}`}>요리 step 시작</Link>
					</StyledButton>
				</div>
			</Details>
		</Container>
	);
}
