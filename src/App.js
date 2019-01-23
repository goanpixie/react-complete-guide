import React, { Component } from 'react';
import classes from './App.css';
import SuperHeroes from './SuperHeroes/SuperHeroes.js';
import ww_logo from './SuperHeroes/wonder_woman.jpeg';
import bp_logo from './SuperHeroes/black_panther.png';
import y_logo from './SuperHeroes/yoda.jpg';
import bw_logo from './SuperHeroes/bw_logo.png';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

  nameChangedHandler = (event, id) => {
    const superHeroIndex = this.state.superHeroes.findIndex(hero => {
      //verifies arguement id with object id
      return hero.id === id;
    });
    const superHero = {
      ...this.state.superHeroes[superHeroIndex]
    };
    superHero.name = event.target.value;
    const superHeroes = [...this.state.superHeroes];
    superHeroes[superHeroIndex] = superHero;
    this.setState({superHeroes: superHeroes})
  }

  deleteSuperheroHandler = (heroIndex) => {
    const heroes = [...this.state.superHeroes];//makes a copy of the superHeroes array instead of referencing it from original array. Hence in subsequest steps the original array won't get mutated.
    heroes.splice(heroIndex, 1);
    this.setState({ superHeroes: heroes });
  }

  toggleSuperheroHandler = () => {
    const doesShow = this.state.showSuperhero;
    this.setState({ showSuperhero: !doesShow });
  }

  render() {
    let heroes = null;
    let btnClass = "";
    if (this.state.showSuperhero) {
      heroes = (
        <div>
          {this.state.superHeroes.map((hero, index) => {
            return <SuperHeroes
              click={() => this.deleteSuperheroHandler(index)}
              name={hero.name}
              weapon={hero.weapon}
              key={hero.id}
              changed={(event) => this.nameChangedHandler(event, hero.id)}
            >
            </SuperHeroes>
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    let assignedClasses = [];
    if (this.state.superHeroes.length <= 2) {
      assignedClasses.push(classes.red);
    };
    if (this.state.superHeroes.length <= 1) {
      assignedClasses.push(classes.bold);
    };
    console.log(classes);

    return (
      <div className={classes.App}>
        <h1>My React app:)</h1>
        <p className={assignedClasses.join(' ')}>It's time to save the world..let's go!</p>
        <button
          className={btnClass}
          onClick={this.toggleSuperheroHandler}>
          Make a SuperHero
        </button>
        {heroes}
        </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'My React App') );
  }
}

export default App;
