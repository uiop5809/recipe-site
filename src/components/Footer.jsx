import styled from "styled-components";

const Foot = styled.footer`
  background: #2c2a29;
  padding: 20px 0;
  p {
    color: #fff;
    margin: 10px 0;
  }
`;
const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <Foot>
      <Container>
        <p>만든이: 박예진, 정태우</p>
        <p>© 2022 SSI, All rights reserved.</p>
      </Container>
    </Foot>
  );
}
