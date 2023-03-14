import React from 'react';
import {Link} from "react-router-dom"

function Card(props) {
    
    
    return (    
        <Link to={`/fiche-logement/${props.id}`} className='card'>
            <div className='cardImage'>
                <img src={props.cover} alt={props.title}/>
            </div>
            <div className='cardText'>
                <h2>{props.title}</h2>
            </div>
        </Link>       
    );
};

export default Card;
