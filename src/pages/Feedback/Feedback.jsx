import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import "../Feedback/Feedback.css";
import { db } from '../../firebase';
const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Save to Firebase
      await addDoc(collection(db, "feedback"), {
        name: e.target.name.value,
        message: e.target.message.value,
        timestamp: new Date()
      });
      
      setSubmitted(true); // Trigger your custom success message
  } catch (error) {
  console.error("Error adding document: ", error);
  alert("Error: " + error.message); // This will show you exactly what Firebase is complaining about
}
  };

  if (submitted) {
    return (
      <div className="feedback-container success-message">
        <h2>Thank you Trainer!</h2>
        <p>Your feedback has been saved to the database.</p>
        <button onClick={() => setSubmitted(false)}>Send another</button>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <h1>Trainer Feedback</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>Name</label>
        <input type="text" name="name" required placeholder="Enter your name" />

        <label>How are you enjoying the Pokédex Website</label>
        <textarea name="message" rows="5" required placeholder="Share your thoughts" />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;