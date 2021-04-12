import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList/cardList.component';
import { SearchBox } from './components/searchBox/searchbox.component';
import { createClient } from 'pexels';

class App extends Component {


  constructor(){
    super();
    this.state = {
      weapons: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/jcquinlan/dnd5-weapons-json/master/json/martialMeleeWeapons.json')
    .then(response => response.json())
    .then(users => this.setState({weapons: users}))
  }


  render(){

    const { weapons, searchField } = this.state;
    const filteredWeapons = weapons.filter(weapon =>
      weapon.Name.toLowerCase().includes(searchField.toLowerCase())
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
