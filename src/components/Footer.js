import React from "react";
//import "./Footer.css";
import "../styles.css";


function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Blood Donor Management. All Rights Reserved.</p>
      <p>
        Made with ❤️ by <strong>Apeksha & Akshat Vedant</strong>
      </p>
    </footer>
  );
}

export default Footer;
