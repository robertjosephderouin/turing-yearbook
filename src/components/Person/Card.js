import React from 'react';
import './Card.css';
import '../App/App.css';

const Card = ({name, photo, quote}) => {
  return (
    <div className='card'>
      <img class="photo" src={photo} alt={name} />
      <h3 class="name">{name}</h3>
      <quote class="description">-{quote}</quote>
    </div>
  )
}

export default Card;
