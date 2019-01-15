import React, { Component } from 'react';
import './App.css';
import SuperHeroes from './SuperHeroes/SuperHeroes.js';
import ww_logo from './SuperHeroes/wonder_woman.jpeg';
import bp_logo from './SuperHeroes/black_panther.png';
import y_logo from './SuperHeroes/yoda.jpg';
import bw_logo from './SuperHeroes/bw_logo.png';

class App extends Component {
  state = {
    superHeroes: [
      { id:"fgd", name: "Wonder Woman", weapon: "golden whip" },
      { id:"njb", name: "Black Panther", weapon: "armor suit" },
      { id:"hgh", name: "Yoda", weapon: "wisdom" }
    ],
    showSuperhero: false
  }

  makeSuperheroHandler = (newName, newWeapon) => {
    //  console.log("I was clicked!")
    this.setState({
      superHeroes: [
        { name: newName, weapon: newWeapon },
        { name: "Black Panther", weapon: "armor suit" },
        { name: "Yoda", weapon: "wisdom, say I may...yuhooooo!!" }
      ]
    })
  }

  deleteSuperheroHandler = (heroIndex) => {
    const heroes = [...this.state.superHeroes];//makes a copy of the superHeroes array instaed of referencing it from original array. Hence in subsequest steps the original array won't get mutated.
    heroes.splice(heroIndex, 1);
    this.setState({ superHeroes: heroes });

  }

  toggleSuperheroHandler = () => {
    const doesShow = this.state.showSuperhero;
    this.setState({ showSuperhero: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: '#fab81e',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    }

    let heroes = null;
    if (this.state.showSuperhero) {
      heroes = (
        <div>
          {this.state.superHeroes.map((hero, index) => {
            return <SuperHeroes
              click={() => this.deleteSuperheroHandler(index)}
              name={hero.name}
              weapon={hero.weapon}
              key={hero.id}>
            </SuperHeroes>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>My React app:)</h1>
        <button onClick={this.toggleSuperheroHandler}>Make a SuperHero</button>
        {heroes}
      </div>

    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'My React App') );
  }
}

export default App;
