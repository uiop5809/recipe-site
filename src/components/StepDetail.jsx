import StyledButton from "./styled-component/StyledButton";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { MdOutlineTimer } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import Timer from "./Timer";
import { useState } from "react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const StyledSwiper = styled(Swiper)`
  width: 1300px;
  height: 75vh;
  box-sizing: border-box;
  position: relative;
  padding: 10vh 0;

  .swiper-slide {
    height: 50vh;
    .box {
      display: flex;
      flex-wrap: wrap;
      height: 50vh;
      padding: 0 20px;

      .content {
        margin: auto;
        height: 20vh;
        width: 300px;
        line-height: 1.4em;
        font-size: 18px;
        li {
          margin: auto;
        }
      }
      .timer {
        border-radius: 10px;
        color: white;
        width: 220px;
        height: 7.5vh;
        margin: auto;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
        text-align: center;
        font-size: 3vh;
        font-weight: 800;
        cursor: pointer;
        .timerIcon {
          margin: 3px;
          float: left;
        }
      }
    }
    border: 5px solid #fff5ee;
  }
  .goBackButton {
    margin: 1vh 0 0 2vw;
    .goBack {
      width: 3vh;
      height: 3vh;
    }
  }
  .goHomeButton {
    margin: 1vh 2vw 0 0;
    float: right;
    .goHome {
      width: 3vh;
      height: 3vh;
    }
  }
`;

export default function StepDetail({ id, steps }) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  function click() {
    setClicked(!clicked);
  }
  return (
    <>
      <StyledSwiper
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
      >
        <ol style={{ listStyleType: "decimal" }}>
          {steps.map((step) => (
            <SwiperSlide>
              {({ isActive }) => (
                <div className="box">
                  {isActive ? (
                    <>
                      <div className="content">
                        <li key={step.content}>{step.content}</li>
                      </div>
                      <StyledButton className="timer" onClick={click}>
                        <MdOutlineTimer className="timerIcon" />
                        <Timer t={step.time} clicked={clicked} />
                      </StyledButton>
                    </>
                  ) : (
                    <>
                      <div className="content">
                        <li key={step.content}>{step.content}</li>
                      </div>
                      <StyledButton className="timer">
                        <MdOutlineTimer className="timerIcon" />
                        {parseInt(step.time / 60) < 10 ? "0" : ""}
                        {parseInt(step.time / 60)} :
                        {parseInt(step.time % 60) < 10 ? " 0" : " "}
                        {step.time % 60}
                      </StyledButton>
                    </>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </ol>
        <StyledButton
          className="goBackButton"
          onClick={() => {
            navigate(-1); // 뒤로가기
          }}
        >
          <RiArrowGoBackFill className="goBack" />
        </StyledButton>
        <Link to={`/`}>
          <StyledButton className="goHomeButton">
            <AiOutlineHome className="goHome" />
          </StyledButton>
        </Link>
      </StyledSwiper>
    </>
  );
}
