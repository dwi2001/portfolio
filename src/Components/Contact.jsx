import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailSubmit = (formData) => {
    const email = "dwinfauzi@gmail.com";
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");
  };

  const fromValid = (formData) => {
    return formData.subject !== "" && formData.email !== "";
  };

  const handleSubmit = (e) => {
    if (fromValid(formData) !== null) {
      console.log("Form submitted!");
      setSubmitted(true);
      handleEmailSubmit(formData);
    } else {
      console.log("Form validation failed!");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="submitted-message">{"Message has been direct :)"}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              // className="textInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              // className="textInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <a type="submit" target="blank">
            <button className="submit-btn">
              {" "}
              Submit
              <FaCheck> </FaCheck>{" "}
            </button>
          </a>
        </form>
      )}
    </div>
  );
};

export default Contact;
