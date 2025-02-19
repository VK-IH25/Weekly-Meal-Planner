import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ padding: "10px", textAlign: "center" }}>
      <div>&copy; {currentYear} ForkCast. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
