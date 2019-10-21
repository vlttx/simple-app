import React, { Component } from 'react';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';

export default class ToDoContainer extends Component {
	render() {
		console.log(this.state);
		return (
			<div>
				<h3>To Do List:</h3>
				<ToDoList items={this.state.items} />
				<NewToDo />
			</div>
		);
	}
}
