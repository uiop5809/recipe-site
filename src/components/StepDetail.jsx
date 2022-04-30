import Container from "./styled-component/Container";
import StyledButton from "./styled-component/StyledButton";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function StepDetail({ id, step }) {
  const navigate = useNavigate();
  console.log(step[0].content);

  return (
    <Container>
      <ol style={{ listStyleType: "decimal" }}>
        {step.map((s) => (
          <li key={s.content}>{s.content}</li>
        ))}
      </ol>
      <StyledButton
        onClick={() => {
          navigate(-1); // 뒤로가기
        }}
      >
        <RiArrowGoBackFill className="goBack" />
      </StyledButton>
    </Container>
  );
}
