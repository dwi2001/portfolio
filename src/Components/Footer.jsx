import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <h4>Copyright &copy; {year}</h4>
      <div className="footerLinks">
        <a
          href="https://www.instagram.com/dwinugrahafauzi?igsh=Y3RhMGttNTQ3ZXh0"
          target="_blank"
        >
          <FaInstagram />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dwinfauzi@gmail.com"
          target="_blank"
        >
          <GrMail />
        </a>

        <a href="https://id.linkedin.com/in/dwinugrahafauzi" target="blank">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
