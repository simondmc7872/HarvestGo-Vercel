import { NavLink } from "react-router-dom"

function WebHomeNavbar() {
  return (
    <nav className="navbarM">
      <NavLink to="/" className="nav-brandM">
        Simon Chan
      </NavLink>
      <ul>
        <li className="nav-itemM">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-itemM">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="webhomeabout"
          >
            About
          </NavLink>
        </li>
        <li className="nav-itemM">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="webhomeapp"
          >
            Project
          </NavLink>
        </li>
        <li className="nav-itemM">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default WebHomeNavbar
