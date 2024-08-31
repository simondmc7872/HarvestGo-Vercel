import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>HarvestGO</em> with our easy to use app,
          and get your products delivered straight to your doorstep.
        </p>
        <Link to="/app/products" className="btn btn-default">
          Start shopping
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dzrmzpfs4/image/upload/v1710385554/ludovic-charlet-8RcjmdqXHwM-unsplash_csam9e.jpg"
        width="385"
        height="240"
        className="rounded home-image"
        alt=""
      />
      <Link to="/">
        <div className="profile-iconM">
          <img src="ProfilePicMade.png" width="70" height="70" alt="" />
          <p className="return">Return to Profile</p>
        </div>
      </Link>
    </div>
  )
}
