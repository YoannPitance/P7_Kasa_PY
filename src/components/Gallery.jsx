import React, {useState, useEffect} from 'react';
import Card from './Card';
import axios from 'axios';
import '../styles/gallery.css'

const Gallery = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    axios.get('/datas.json').then((res) => {
      console.log(res)
      setData(res.data)
      console.log(res.data)
    })
  })

  return (
    <div className='gallery'>
      <Card/>
    </div>
  );
};

export default Gallery;
