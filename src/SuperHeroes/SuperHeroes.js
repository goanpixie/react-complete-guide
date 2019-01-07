import React from 'react';

const superHeroes = (props) => {
	return (
		<div>
			<p>I am {props.name} and you should be scared of my {props.weapon}</p>
			<p>{props.children}</p>
		</div>
	);
	}

export default superHeroes;