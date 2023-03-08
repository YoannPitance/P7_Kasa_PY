import React from "react";
import "../styles/banner.css";

const Banner = (props) => {
  return (
    <div className="Banner">
      <img src={props.imageUrl} alt="bannière paysage avec texte" />
      {props.title && <h1>{props.title}</h1>}
    </div>
  );
};

export default Banner;
