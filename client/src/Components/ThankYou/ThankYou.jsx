import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css'; // Ensure you create this CSS file for styling

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your message has been sent successfully. We will get back to you shortly.</p>
        <p>Best regards,</p>
        <p>The Vvision Globex Team</p>
        <Link to="/" className="btn-home">Back to Home</Link>
      </div>
    </div>
  );
}

export default ThankYou;
