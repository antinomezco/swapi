import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
    state = {
    contacts: []
    }

const urls = [
  'https://swapi.co/api/people/1/?format=json',
  'https://swapi.co/api/people/2/?format=json',
  'https://swapi.co/api/people/3/?format=json',
  'https://swapi.co/api/people/4/?format=json'
]

  componentDidMount() {
    fetch('https://swapi.co/api/people/1/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
      
    render() {
        return (
          <Contacts contacts={this.state.contacts} />
        );
    }
}

export default App;