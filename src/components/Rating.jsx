import React from "react";
import "../styles/rating.css";

function Rating({ rate }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((num) => (
        <span key={num} className={rate >= num ? "full" : ""}>
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
