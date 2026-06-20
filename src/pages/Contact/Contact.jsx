import React from 'react'
import "../Contact/Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact the Pokémon Professor</h1>
  <p>Have a question about the database or want to 
    contribute to the project?
  </p>

  <div className="contact-info">
    <h3>Trainer Support</h3>
<p>Email: <strong>support@pokedexapp.com</strong></p>
<p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
  </div>

<div className="social-links">
  <h3>Follow the Journey</h3>
<a href="https://github.com/KingRosa" target="_blank" rel="noopener noreferrer">
  KingRosa's GitHub
</a></div>
    </div>
  )
}

export default Contact
