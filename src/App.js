import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList/cardList.component';
import { SearchBox } from './components/searchBox/searchbox.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      weapons: [],
      searchField: '',
      API_KEY : '563492ad6f917000010000010666b6e23bad4eb484e55e4da3d02dff'
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({weapons: users}))
  }


  render(){

    const { weapons, searchField } = this.state;
    const filteredWeapons = weapons.filter(weapon =>
      weapon.name.toLowerCase().includes(searchField.toLowerCase())
      );


    return(
      <div className='App'>
        <h1>Epicforge</h1>
        <SearchBox placeholder="Search a Weapon" handleChange={e => this.setState({ searchField: e.target.value})} />
        <CardList weapons={filteredWeapons} />
      </div>
    )
  }

  
}


export default App;
