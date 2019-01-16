import React from 'react';
import './SuperHeroes.css';

const superHeroes = (props) => {
	return (
		<div className="SuperHeroes">
			<p onClick={props.click} style={props.style}>I am {props.name} and you should be scared of my {props.weapon}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	);
	}

export default superHeroes;