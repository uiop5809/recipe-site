import StyledButton from './styled-component/StyledButton';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import Timer from './Timer';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const StyledSwiper = styled(Swiper)`
	width: 1300px;
	height: 70vh;
	box-sizing: border-box;
	position: relative;
	padding: 20px 0;

	.swiper-slide {
		height: 400px;
		.box {
			display: flex;
			flex-wrap: wrap;
			height: 400px;
			padding: 0 20px;

			.content {
				margin: auto;
				height: 200px;
				width: 300px;
				line-height: 1.4em;
				font-size: 18px;
				li {
					margin: auto;
				}
			}
			.timer {
				background: grey;
				border-radius: 10px;
				color: white;
				width: 110px;
				height: 50px;
				margin: auto;
				text-align: center;
				line-height: 50px;
				font-size: 20px;
				font-weight: 800;
			}
		}
		border: 5px solid #fff5ee;
	}
`;

export default function StepDetail({ id, steps }) {
	const navigate = useNavigate();
	// const minutes = steps.map((step) =>
	//   String(parseInt(step.time / 60)).padStart(2, "0")
	// );
	// const seconds = steps.map((step) => String(step.time % 60).padStart(2, "0"));

	return (
		<>
			<StyledSwiper
				spaceBetween={40}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				centeredSlides={true}
			>
				<ol style={{ listStyleType: 'decimal' }}>
					{steps.map((step) => (
						<SwiperSlide>
							{({ isActive }) => (
								<div className="box">
									{isActive ? (
										<>
											<div className="content">
												<li key={step.content}>{step.content}</li>
											</div>
											<div className="timer">
												<Timer t={step.time} />
											</div>
										</>
									) : (
										<>
											<div className="content">
												<li key={step.content}>{step.content}</li>
											</div>
											<div className="timer">
												{parseInt(step.time / 60) < 10 ? '0' : ''}
												{parseInt(step.time / 60)} :
												{parseInt(step.time % 60) < 10 ? ' 0' : ' '}
												{step.time % 60}
											</div>
										</>
									)}
								</div>
							)}
						</SwiperSlide>
					))}
				</ol>
			</StyledSwiper>
			<StyledButton
				onClick={() => {
					navigate(-1); // 뒤로가기
				}}
			>
				<RiArrowGoBackFill className="goBack" />
			</StyledButton>
		</>
	);
}
