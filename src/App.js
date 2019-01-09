import React, { Component } from 'react';
import './App.css';
import SuperHeroes from './SuperHeroes/SuperHeroes.js';
import ww_logo from './SuperHeroes/wonder_woman.jpeg';
import bp_logo from './SuperHeroes/black_panther.png';
import y_logo from './SuperHeroes/yoda.jpg';

class App extends Component {
  state = {
    superHeroes: [
      { name: "Wonder Woman", weapon: "golden whip" },
      { name: "Black Panther", weapon: "armor suit" },
      { name: "Yoda", weapon: "wisdom" }
    ]
  }

  makeSuperheroHandler = (newName,newWeapon) => {
    //  console.log("I was clicked!")
    this.setState({
      superHeroes: [
        { name: newName, weapon: newWeapon},
        { name: "Black Panther", weapon: "armor suit" },
        { name: "Yoda", weapon: "wisdom, say I may...yuhooooo!!" }
      ]
    })
   }

  render() {
    return (
      <div className="App">
        <h1>My React app:)</h1>
        <button onClick={this.makeSuperheroHandler.bind(this, "Black Widow", "Widow's bite")}>Make a SuperHero</button>
        <SuperHeroes
          name={this.state.superHeroes[0].name}
          weapon={this.state.superHeroes[0].weapon}>
          <img src={ww_logo} alt="Wonder Woman" />
        </SuperHeroes>
        <SuperHeroes
          name={this.state.superHeroes[1].name}
          weapon={this.state.superHeroes[1].weapon}
          click={this.makeSuperheroHandler}>
          <img src={bp_logo} alt="Black Pather" />
        </SuperHeroes>
        <SuperHeroes
          name={this.state.superHeroes[2].name}
          weapon={this.state.superHeroes[2].weapon}>
          <img src={y_logo} alt="Yoda" height="300"/>
        </SuperHeroes>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'My React App') );
  }
}

export default App;
