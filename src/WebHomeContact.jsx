const email = import.meta.env.VITE_EMAIL_ADDRESS
const phone = import.meta.env.VITE_PHONE_NUMBER

function WebHomeContact() {
  return (
    <div className="profile-containerC">
      <header className="profile-headerC">
        <h1>Contact Info</h1>
      </header>
      <main className="profile-mainC">
        <section className="contact-details">
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            Phone: <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default WebHomeContact
