import React, { useContext } from 'react';
import ToDoContainer from '../todos/ToDoContainer';
import Random from '../../contexts/random';
import { Link } from 'react-router-dom';

export default function(props) {
	const { text } = useContext(Random);
	console.log(props);
	return (
		<div>
			<h5>{text}</h5>
			<Link to='/random'>Random page</Link>
			<h1>Just do it!</h1>
			<ToDoContainer />
		</div>
	);
}
