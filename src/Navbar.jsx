import { NavLink } from "react-router-dom"

export default function Navbar(props) {
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  )

  return (
    <div className="containerMedia">
      <nav className="navbar">
        <NavLink to="/app" className="nav-brand">
          HarvestGO
        </NavLink>
        <ul className="navbarMedia">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/app"
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/app/about"
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/app/products"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/app/meatseafoodavail"
            >
              Meat & Seafood Availability
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app/cart"
              className="nav-item nav-cart btn btn-accent btn-Media"
            >
              Cart ({cartCount})
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
