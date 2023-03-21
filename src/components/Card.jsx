import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/appartment/${props.id}`} className="card">
      <div className="cardImage">
        <div className="opacityMask"></div>
        <img src={props.cover} alt={props.title} />
        <h2 className="cardText">{props.title}</h2>
      </div>
    </Link>
  );
}

export default Card;
