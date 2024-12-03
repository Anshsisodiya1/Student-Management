import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <div className="center-wrapper">
      <h1>Contact Us</h1>
      <div className="form-cont">
        <form action="https://getform.io/f/ajjjyqja" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
