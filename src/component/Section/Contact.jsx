import React from "react";
import "./Contact.css";
import Tag from "../Tag/Tag";
import { FaGithub } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../variant";

// src/ContactForm.js
import { useState } from "react";
import "./ContactForm.css";
import { IoMdPaperPlane } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconsArray = [
  { id: 1, icon: <FaGithub /> },
  { id: 3, icon: <FaLinkedin /> },
  { id: 4, icon: <FaTwitter /> },
  { id: 2, icon: <FaFacebook /> },
];

function IconsDisplay() {
  return (
    // <motion.div
    //   variants={fadeIn()}
    //   initial="hidden"
    //   exit="hidden"
    //   whileInView="show"
    //   className="icons-container"
    // >
    //   {iconsArray.map((iconObj) => (
    //     <motion.div
    //       exit={{ opacity: 1, scale: 1 }}
    //       transition={{ type: "spring" }}
    //       key={iconObj.id}
    //       className="icon-item"
    //     >
    //       {iconObj.icon}
    //     </motion.div>
    //   ))}
    // </motion.div>
    <motion.div
      variants={fadeIn()}
      initial="hidden"
      exit="hidden"
      whileInView="showWithStaggerChildren"
      className="icons-container"
    >
      {iconsArray.map((iconObj) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            showWithStaggerChildren: { opacity: 1, scale: 1 },
          }}
          exit={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
          key={iconObj.id}
          className="icon-item"
        >
          {iconObj.icon}
        </motion.div>
      ))}
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <h4>Location</h4>
        <p>
          <a
            href="https://www.google.com/maps/place/lagos"
            target="_blank"
            rel="noopener noreferrer"
          >
            1234 Street Name, City, Country
          </a>
        </p>
      </div>
      <div className="footer-item">
        <h4>Email</h4>
        <p>
          <a href="mailto:babatundesegun123@gmail.com">
            Babatundesegun123e@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

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
        <button type="submit">
          Send Message <IoMdPaperPlane />
        </button>
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
      <IconsDisplay />

      <h2 className="secondary-heading contact-footer-secondary-heading">
        Want to know more about me, tell me about your project or just to say
        hello? Drop me a line and I'll get back as soon as possible.
      </h2>

      <Footer />
    </section>
  );
}

export default Contact;
