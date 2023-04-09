import React from 'react'

const Contacto = () => {
  return (
<section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
          <div className="col-lg-4">
            <h2 className="mb-4">Connect with Us</h2>
            <p><i className="fas fa-phone"></i> (555) 555-5555</p>
            <p><i className="fas fa-envelope"></i> info@yoursite.com</p>
            <p><i className="fas fa-map-marker"></i> 123 Main St. Suite 100, Anytown, USA</p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Contacto