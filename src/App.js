import React from 'react';
import sw from './sw.png';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}