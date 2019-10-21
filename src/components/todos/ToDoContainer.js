import React, { Component } from 'react';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';
import { connect } from 'react-redux';

class ToDoContainer extends Component {
	render() {
		return (
			<div>
				<h3>To Do List:</h3>
				<ToDoList items={this.props.items} />
				<NewToDo />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { items: state.items };
};

export default connect(mapStateToProps)(ToDoContainer);
