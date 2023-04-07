import { useState } from "react";
import "../styles/bannerCarrousel.css";

function BannerCarrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const lastIndex = pictures.length - 1;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const lastIndex = pictures.length - 1;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const displayArrows = pictures.length > 1;

  return (
    <div id="containerImg">
      {displayArrows && (
        <>
          <img
            src="/assets/arrow_forward.png"
            alt="flèche suivant"
            className="bouton"
            id="droite"
            onClick={nextSlide}
          />
          <img
            src="/assets/arrow_back.png"
            alt="flèche précédent"
            className="bouton"
            id="gauche"
            onClick={prevSlide}
          />
        </>
      )}
      <div className="carousel__index">
        {`${currentIndex + 1}/${pictures.length}`}
      </div>
      {pictures.map((picture, index) => (
        <div
          key={index}
          className="carousel__images"
          data-current-index={currentIndex}
        >
          {index === currentIndex ? (
            <img
              src={picture}
              alt={`Slide ${index}`}
              className={`carousel__image ${
                index === currentIndex
                  ? "active"
                  : index < currentIndex
                  ? "prev"
                  : "next"
              }`}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default BannerCarrousel;
