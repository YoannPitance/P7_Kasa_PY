import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logofooter">
        <img
          src="/assets/logofooter.png"
          alt="Logo du site Kasa sur fond noir"
        />
      </div>
      <div className="droitsKasa">
        <img
          src="/assets/droitsKasa.png"
          alt="tous droits réservés Kasa 2020"
        />
      </div>
    </footer>
  );
};

export default Footer;
