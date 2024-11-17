import { Link } from "react-router-dom"

function WebHomeApp() {
  return (
    <div className="profile-containerP">
      <header className="headerP">
        <strong>HarvestGO</strong>
        <a href="https://github.com/simondmc7872/HarvestGo-Vercel.git">
          GitHub Repository
        </a>
      </header>
      <main className="containerMain">
        <section>
          <Link to="/app">
            <img src="shop.png" alt="" />
          </Link>
          <p>
            HarvestGO is an online supermarket delivery app featuring
            comprehensive product information, real-time product availability, a
            persistent cart, and seamless checkout functionality.
          </p>
        </section>
        <section>
          <p>
            The supermarket product data is fetched using two different APIs. A
            third-party API from Cloudinary manages the data requests and
            responses for online orders. Additionally, an internal API built
            with Node, Express, and PostgreSQL handles the data requests and
            responses for product availability at physical locations.
          </p>
          <Link to="/app/meatseafoodavail">
            <img src="shop2.png" alt="" />
          </Link>
        </section>
        <section>
          <Link to="/app/cart">
            <img src="shop3.png" alt="" />
          </Link>
          <p>
            The cart integrates Stripe as the payment processor within the
            shopping app for a simple and convenient checkout process.
          </p>
        </section>
        <section className="appbutton">
          <Link to="/app">Go to Application</Link>
        </section>
      </main>
    </div>
  )
}

export default WebHomeApp
