import React from 'react';
import './SuperHeroes.css';
const superHeroes = (props) => {
	return (
		<div className="SuperHeroes" >
			<p onClick={props.click}>I am {props.name} and you should be scared of my {props.weapon}</p>
			<p>{props.children}</p>
		</div>
	);
	}

export default superHeroes;