import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteToDo } from '../actions/ToDos';

class ToDoItem extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = () => {
			this.props.deleteToDo(this.props.id);
		};
	}

	render() {
		return (
			<div>
				<li>
					{this.props.text}
					{'   '}
					<button type='submit' onClick={this.handleSubmit}>
						Delete
					</button>
				</li>
			</div>
		);
	}
}

export default connect(
	null,
	{ deleteToDo }
)(ToDoItem);
