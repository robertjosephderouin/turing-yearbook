import React from 'react';
import Person from '../Person/Person';
import Card from '../Person/Card';
import './Cohort.css';
import '../App/App.css';

// COHORT COMPONENT CODE GOES HERE

const Cohort = ({students}) => {

  const studentCards = students.map(student => {
    return (
      <Card
        name={student.name}
        photo={student.photo}
        quote={student.quote}
      />
    )
  })

  return (
    <div className='students-container'>
      {studentCards}
    </div>
  )
}


export default Cohort;
