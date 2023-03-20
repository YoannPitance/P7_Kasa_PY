// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function FicheLogement() {
//   const location = useLocation()
//   console.log(location)
//   console.log(location.state.cardId)
//   const [selectedCard, setSelectedCard] = useState(null);

//   useEffect(getDatasById, []);

//   function getDatasById() {
//     fetch('/datas.json')
//       .then((res) => res.json())
//       .then((card) => {
//           const foundCard = card.find((card)=> card.id === location.state.cardId);
//           console.log(foundCard)
//           setSelectedCard(card)
//         })

//       .catch((err) => console.log(err))

//   }
//   return (
//     <div>

//     </div>
//   );
// }

// export default FicheLogement;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Collapse from "../components/Collapse";
import "../styles/ficheLogement.css";
import Page404 from "../pages/Page404";

function FicheLogement() {
  const { id } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get("/datas.json")
      .then((response) => {
        const exists = response.data.some((card) => card.id === id);
        if (exists) {
          const foundCard = response.data.find((card) => card.id === id);
          setSelectedCard(foundCard);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setNotFound(true);
      });
  }, [id]);

  if (notFound) {
    return <Page404 />;
  }

  if (!selectedCard) {
    return null;
  }

  return (
    <main>
      {selectedCard && (
        <>
          <section id="bannerCarrousel">
            <div className="banner">
              <img src={selectedCard.pictures[0]} alt={selectedCard.title} />
            </div>
          </section>

          <section id="presentation">
            <div className="presentation">
              <h2 className="titleLogement">{selectedCard.title}</h2>
              <h3>{selectedCard.location}</h3>
              <div className="tagsContainer">
                {selectedCard.tags.map((tag, index) => (
                  <span key={index} className="tags">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div id="author">
              <div className="author">
                <p>{selectedCard.host.name}</p>
                <div className="roundImg">
                  <img
                    src={selectedCard.host.picture}
                    alt="photographie de l'auteur"
                  />
                </div>
              </div>
              <div className="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </section>

          <section id="description">
            <div className="collapses">
              <div className="details">
                <Collapse title="Description">
                  <p>{selectedCard.description}</p>
                </Collapse>
              </div>

              <div className="details">
                <Collapse title="Equipements">
                  {selectedCard.equipments.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                  ))}
                </Collapse>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default FicheLogement;
