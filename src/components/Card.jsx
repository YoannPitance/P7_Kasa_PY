import React from 'react';

const Card = ({title, cover }) => {
    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={cover} alt={title}/>
            </div>
            <div className='cardText'>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Card;
