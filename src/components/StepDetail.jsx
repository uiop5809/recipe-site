import StyledButton from "./styled-component/StyledButton";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const StyledSwiper = styled(Swiper)`
  width: 1300px;
  height: 70vh;
  box-sizing: border-box;
  position: relative;
  padding: 20px 0;

  .swiper-slide {
    display: flex;
    height: 400px;
    li {
      margin: auto;
      padding: 0 20px;
      .content {
        line-height: 1.4em;
        font-size: 18px;
      }
    }
    border: 5px solid #fff5ee;
  }
`;

export default function StepDetail({ id, steps }) {
  const navigate = useNavigate();

  return (
    <>
      <StyledSwiper
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <ol style={{ listStyleType: "decimal" }}>
          {steps.map((step) => (
            <SwiperSlide>
              <li key={step.content}>
                <p className="content">{step.content}</p>
              </li>
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
