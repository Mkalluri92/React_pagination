import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {

  state = {
    details: null
  }

  componentDidMount() {
    axios.get(`http://localhost:8081`)
    .then(response => {
      this.setState({details: response})
    })
  }

  render () {
    let personDetails = null;
    if(this.state.details) {
      personDetails = this.state.details.data.data.map(current => {
        return <tr key={current.firstName}>
          <td>{current.firstName}</td>
          <td>{current.lastName}</td>
          <td>{current.country}</td>
          <td>{current.age}</td>
        </tr>
      })
    }
    return (
      this.state.details? <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Country</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
            {personDetails}
        </tbody>
      </table>: null
    )
  }
}

export default App;
