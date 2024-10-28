import { NavLink } from "react-router-dom"

function WebHomeNavbar() {
  return (
    <div className="webcontainermedia">
      <nav className="navbarM">
        <NavLink to="/" className="nav-brandM">
          Simon Chan
        </NavLink>
        <ul className="webNavbarMedia">
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
    </div>
  )
}

export default WebHomeNavbar
