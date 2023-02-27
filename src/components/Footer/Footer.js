import "./FooterStyles.css";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>La Plata, Argentina</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +54 9 221 3031342
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jmendez4tob@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Sobre mi</h4>
          <p>
            Soy un programador Fullstack graduado de SoyHenry y estudiante de
            ingeniería electrónica.
          </p>
          <div className="social">
            <NavLink to="https://github.com/userJAMT">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/userjamt/?locale=en_US">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
