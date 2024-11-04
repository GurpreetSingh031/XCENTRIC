import React, { useState } from 'react';
import '../styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
