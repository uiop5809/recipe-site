import Container from "./styled-component/Container";
import styled from "styled-components";

const Details = styled.div`
  margin: 35px auto;
  display: flex;

  img {
    width: 300px;
    height: 300px;
    margin: auto 20px;
    border-radius: 100px;
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
  return (
    <Container>
      <Details>
        <img src={coverImg} alt="img"></img>
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{totalTime}</div>
        <ol>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ol>
      </Details>
    </Container>
  );
}
