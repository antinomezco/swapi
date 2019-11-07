import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {

    const urls = [
      'https://swapi.co/api/people/1',
      'https://swapi.co/api/people/2/?format=json',
      'https://swapi.co/api/people/3/?format=json',
      'https://swapi.co/api/people/4/?format=json'
    ]

    state = {
        contacts: []
    };

    componentDidMount() {
        Promise.all(urls.maps(url => {
            fetch(url).then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
        }
        .catch(console.log)
    }



    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

}
export default App;