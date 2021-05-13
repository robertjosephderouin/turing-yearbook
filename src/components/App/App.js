import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import Person from '../Person/Person';
import Card from '../Person/Card';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      isLoading: false,
      staff: people.staff,
      students: people.students,
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.setState({isLoading: false})
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }

    return(
      <main className='App'>
        <h1 class="headers">Turing Yearbook</h1>
        <h3 class="headers">Staff</h3>
        <Person persons={this.state.staff} />
        <h3 class="headers">Students</h3>
        <Cohort students={this.state.students} />
      </main>
    )
  }
}

export default App;
