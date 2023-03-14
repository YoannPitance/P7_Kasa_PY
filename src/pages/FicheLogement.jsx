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

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FicheLogement() {
  const { id } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  
  useEffect(() => {
    axios.get('/datas.json')
      .then(response => {
        const foundCard = response.data.find(card => card.id === id);
        setSelectedCard(foundCard);
      })
      .catch(error => console.log(error));
  }, [id]);
  
  return (
    <main>
      {selectedCard && (
        <div>
          <h2>{selectedCard.title}</h2>
          <img src={selectedCard.cover} alt={selectedCard.title} />
          <p>{selectedCard.description}</p>
        </div>
      )}
    </main>
  );
}

export default FicheLogement;
