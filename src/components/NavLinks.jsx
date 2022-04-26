import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/korea"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          한식
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/chinese"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          중식
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/japanese"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          일식
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/western"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          양식
        </NavLink>
      </li>
    </ul>
  );
}
