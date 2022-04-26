import styled from "styled-components";
import NavLinks from "./NavLinks";

export default function Header() {
  const Head = styled.header`
    background: #f5f6f0;
    text-align: center;
    h1 {
      font-size: 50px;
      font-weight: 800;
      padding: 30px 0;
    }
  `;

  return (
    <Head>
      <h1> Recipe site </h1>
      <div> 검색 부분 </div>
      <NavLinks />
    </Head>
  );
}
