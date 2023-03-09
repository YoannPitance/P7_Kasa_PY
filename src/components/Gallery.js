import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/gallery.css";

const Gallery = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
      )

      .then((response) => {
        console.log(response);
        setCards(response.data.map(({ cover, title }) => ({ cover, title })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div className="gallery"></div>;
};

export default Gallery;
