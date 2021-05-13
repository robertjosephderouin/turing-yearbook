import React from 'react';
import Card from './Card';
import './Person.css';
import '../App/App.css';

// PERSON COMPONENT CODE GOES HERE

const Person = ({persons}) => {

  const personCards = persons.map(person => {
    return (
      <Card
        name={person.name}
        photo={person.photo}
        quote={person.quote}
      />
    )
  })

  return (
    <div className='persons-container'>
      {personCards}
    </div>
  )
}


export default Person;
