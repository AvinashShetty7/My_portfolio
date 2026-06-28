import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/_avinashshetty/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://www.facebook.com/avinasha.shetty.77" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/avinasha-shetty-15a486276"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;