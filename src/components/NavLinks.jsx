import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.div`
  ul {
    display: flex;
    padding-top: 10px;
    li {
      box-sizing: border-box;
      position: relative;
      &:hover {
        background-color: #9d5353;
      }
      width: 20%;
      height: 70px;
      border-radius: 20px 20px 0 0;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px 20px 0 0;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        font-weight: 800;
      }
    }
  }
`;

export default function NavLinks() {
  return (
    <List>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              background: isActive ? "#632626" : "inherit",
              color: isActive ? "white" : "black",
            })}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/korean"
            style={({ isActive }) => ({
              background: isActive ? "#632626" : "inherit",
              color: isActive ? "white" : "black",
            })}
          >
            한식
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chinese"
            style={({ isActive }) => ({
              background: isActive ? "#632626" : "inherit",
              color: isActive ? "white" : "black",
            })}
          >
            중식
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/japanese"
            style={({ isActive }) => ({
              background: isActive ? "#632626" : "inherit",
              color: isActive ? "white" : "black",
            })}
          >
            일식
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/western"
            style={({ isActive }) => ({
              background: isActive ? "#632626" : "inherit",
              color: isActive ? "white" : "black",
            })}
          >
            양식
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            style={({ isActive }) => ({
              background: isActive ? "#632626" : "inherit",
              color: isActive ? "white" : "black",
            })}
          >
            검색
          </NavLink>
        </li>
      </ul>
    </List>
  );
}
