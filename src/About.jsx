export default function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About Us</h1>
        <p>
          We started operations in 2020. We guarantee fresh produce.
          <br />
          Save time by shopping on our app and we'll deliver the products right
          to your home. <br />
          <em>We use Stripe to process your payment.</em>
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dzrmzpfs4/image/upload/v1710385555/sara-scarpa-AJFQGDaFP-s-unsplash_kickbe.jpg"
        height="275"
        width="183"
        className="rounded"
        alt=""
      />
    </div>
  )
}
