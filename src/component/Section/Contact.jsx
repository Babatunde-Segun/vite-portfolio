import React from "react";
import "./Contact.css";
import Tag from "../Tag/Tag";

// src/ContactForm.js
import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Submit the form (e.g., send data to the server)
      console.log("Form submitted:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="company">Company Name:</label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div className="form-group full-width">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <div className="full-width">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact">
      <Tag>Contact</Tag>

      <h2 className="secondary-heading contact-secondary-heading">
        Let's make something <br /> awesome together
      </h2>

      <ContactForm />
    </section>
  );
}

export default Contact;
