import styled from "styled-components";
import { MdOutlineTimer } from "react-icons/md";
import Container from "./styled-component/Container";
import StyledButton from "./styled-component/StyledButton";
import { Link } from "react-router-dom";

const Desc = styled.div`
  margin: 35px auto;
  height: 280px;
  display: flex;
  border-radius: 20px;
  background: #fff5ee;

  img {
    width: 250px;
    height: 250px;
    margin: auto 20px;
    border-radius: 100px;
  }

  .description {
    padding: 20px 20px 20px 0;
    margin-bottom: 20px;
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
    .desc {
      margin: 10px 0;
      line-height: 1.25em;
      height: 100px;
    }
  }
`;

export default function Recipe({
  id,
  title,
  subtitle,
  desc,
  coverImg,
  totalTime,
}) {
  return (
    <Container>
      <Desc>
        <img src={coverImg} alt={title} />
        <div className="description">
          <h2 className="title">{title}</h2>
          <h4 className="subtitle">{subtitle}</h4>
          <h4 className="totalTime">
            <MdOutlineTimer />
            {totalTime}분
          </h4>
          <p className="desc">{desc}</p>
          <StyledButton>
            <Link to={`/ingredient/${id}`}>요리 시작하기 </Link>
          </StyledButton>
        </div>
      </Desc>
    </Container>
  );
}
