import React from 'react';
import './SuperHeroes.css';
import Radium from 'radium';

const superHeroes = (props) => {
	const style = {
		'@media(min-width: 500px': {
			width:'450px'
		}
	}
	return (
		<div className="SuperHeroes" style={style}>
			<p onClick={props.click} style={props.style}>I am {props.name} and you should be scared of my {props.weapon}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	);
	}

export default Radium(superHeroes);