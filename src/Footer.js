import React from "react";
import "./Footer.css";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return (
      <footer>
        <a href="https://github.com/katcze91/weather-react">
          {" "}
          <GoMarkGithub size="25px" />
          Opensourced
        </a>{" "}
        by{" "}
        <a href="https://www.linkedin.com/in/katarzyna-czepiela-55830634/">
          Katarzyna Czepiela <FaLinkedin size="22px" />
        </a>
      </footer>
    );
}