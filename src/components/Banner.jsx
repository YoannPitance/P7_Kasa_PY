import React from "react";
import "../styles/banner.css";

const Banner = (props) => {
  return (
    <div className="Banner">
      <img src={props.imageUrl} alt="bannière paysage avec texte" />
      {props.title && <h2>{props.title}</h2>}
    </div>
  );
};

export default Banner;
