import React, { useState } from 'react'
import "../About/About.css"
const About = () => {
const [avatar, setAvatar] = useState(null); 

const handleImageChange = (e) => {
  if (e.target.files && e.target.files) { // Corrected access here
    setAvatar(URL.createObjectURL(e.target.files));
  };
};

 return (
    <div className="about-container">
      <div className="trainer-profile">
    <div className="avatar-container">
  {avatar ? (
    <img src={avatar} alt="Trainer Avatar" className="avatar-img" />
  ) : (
    <div className="avatar-placeholder">?</div> // You were missing the </div> here
  )}
    </div>
        <label htmlFor='file-upload' className="custom-file-upload">
          Set Trainer Avatar 
        </label>
        <input id="file-upload" type="file" onChange={handleImageChange} hidden />
      </div>

      <h1>About this Pokédex</h1>
      <br />
      <p>
Welcome to your personal Pokémon companion app! This project
was built using React and the official PokéAPI to help trainers keep 
track of their favorite Pokémon.
      </p>
      <div className="about-features">
        <div className="feature-card">
          <h3>Search</h3>
  <p>View detailed stats, abilities, and types for every
    Pokémon.
  </p>
        </div>

        <div className="feature-card">
          <h3>Dark/Light Mode</h3>
      <p>Switch themes to match your training environment. </p>
        </div>


   
      </div>
    </div>
  )
}
  
 

export default About
