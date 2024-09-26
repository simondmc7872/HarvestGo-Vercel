import { Link } from "react-router-dom"

function WebHome() {
  return (
    <div className="profile-containerM">
      <header>
        <div role="banner" aria-label="Site Header"></div>
      </header>
      <main className="profile-mainM">
        <div className="containerL">
          <h1 className="nameM">Simon Chan</h1>
          <h2 className="headlineM">Full-Stack Web Developer</h2>
          <p className="descriptionM">
            I am a software engineer specializing in web development using
            modern tools and coding best practices. Currently, I am focused on
            building sleek, responsive web applications using frontend and
            backend with databases.
          </p>
          <div className="containerImg">
            <img
              src="React-icon.svg"
              alt=""
              width="40"
              height="auto"
              className="imageshadow"
            />
            <img
              src="JavaScript-logo.png"
              width="40"
              height="auto"
              alt=""
              className="imageshadow"
            />
            <img
              src="nodejs.webp"
              width="65"
              height="auto"
              alt=""
              className="imageshadow"
            />
            <img
              src="exicon.png"
              width="45"
              height="auto"
              alt=""
              className="imageshadow"
            />
            <img
              src="Postgresql_elephant.svg"
              width="40"
              height="auto"
              alt=""
              className="imageshadow"
            />
            <img
              src="gitlogo.png"
              width="45"
              height="auto"
              alt=""
              className="imageshadow"
            />
          </div>
        </div>
        <div className="containerR">
          <div className="containerTR">
            <p>
              <strong>Click Here</strong>
            </p>
            <img src="arrow.png" alt="" width="16" height="auto" />
          </div>
          <div className="containerBR">
            <Link to="/app">
              <img src="cart_preview.png" alt="" width="375" height="auto" />
            </Link>
          </div>
          <div className="containerBBR">
            <p>Built with React, ExpressJS, & Postgres</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default WebHome
