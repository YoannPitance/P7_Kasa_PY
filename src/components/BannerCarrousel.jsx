import React, { useState } from "react";

function BannerCarrousel({ pictures }) {
  //   const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id="containerImg">
      <img
        src="/assets/arrow_forward.png"
        alt="flèche suivant"
        className="bouton"
        id="droite"
      />
      <img
        src="/assets/arrow_back.png"
        alt="flèche précédent"
        className="bouton"
        id="gauche"
      />

      {pictures.map((picture) => (
        <img className="bannerImg" key={picture} src={picture} alt=""></img>
      ))}
    </div>
  );
}

export default BannerCarrousel;
