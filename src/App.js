import React from 'react';
import sw from './sw.png';
import './App.css';

class App extends Component{
    constructor() {
        super()
    }
//fetch('https://jsonplaceholder.typicode.com/users')
 //           .then(response =>response.json())
 //           .then(users => this.setState({force: users}));
  render (){
    <div className="App">
      <header className="App-header">
        <img src={sw} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  }
}

export default App;
