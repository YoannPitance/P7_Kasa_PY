import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Card from './Card';

import '../styles/gallery.css'

function Gallery() {

  const [data, setData] = useState([])
  
  const getDatas = () => {
    axios.get('/datas.json')
      .then((res) => setData(res.data))
      
      .catch((err) => console.log(err))      
  };
    
    useEffect(() => {
      getDatas()
    },[]);    

  return (
    <>
      <div className='gallery'>
      {data.length > 0 && data.map((card) => (
        <Card key={card.id} title={card.title} cover={card.cover} /> 
        ))}
        </div>        
    </>
  );
}

export default Gallery;
