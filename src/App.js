import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

class App extends Component {

  state = {
    details: null
  }

  componentDidMount() {
    axios.get(`http://localhost:8081`)
    .then(response => {
      console.log(response);
      this.setState({details: {
        columns: [
        {
          label: 'First Name',
          field: 'firstName',
          width: 150,
          sort: "asc"
        },
        {
          label: 'Last Name',
          field: 'lastName',
          width: 270,
          sort: "asc"
        },
        {
          label: 'Country',
          field: 'country',
          width: 200,
          sort: "asc"
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100
        },
      ],
      rows: response.data.data,
    }});
    
  })
}

  render () {
    
    return (
      this.state.details? <MDBDataTable hover 
        striped 
        bordered
        entriesOptions={[5, 20, 25]}
        entries = {5}
        data={this.state.details} />: null
    )
  }
}

export default App;
