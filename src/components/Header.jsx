import styled from "styled-components";
import NavLinks from "./NavLinks";
import Container from "./styled-component/Container";

const Head = styled.header`
  background: #fae3d9;
  text-align: center;
  h1 {
    font-size: 50px;
    font-weight: 800;
    padding: 40px 0;
    color: #632626;
  }
`;

export default function Header() {
  return (
    <Head>
      <Container>
        <h1> Recipe site </h1>
        <div> 검색 부분 </div>
        <NavLinks />
      </Container>
    </Head>
  );
}
