import React from 'react';
import './Card.css';
import '../App/App.css';

const Card = ({name, photo, quote}) => {
  return (
    <div className='card'>
      <img class="photo" src={photo} alt={name} />
      <h3>{name}</h3>
      <quote>-{quote}</quote>
    </div>
  )
}

export default Card;
