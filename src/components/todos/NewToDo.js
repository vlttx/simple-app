import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/ToDos';

class NewToDo extends Component {
	state = { text: '', id: null };

	handleChange = e => {
		this.setState({ text: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		const newItem = {
			text: this.state.text,
			id: Date.now()
		};
		this.props.addToDo(newItem);
		this.setState({ text: '', id: null });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='new-todo'>Things that need to be done:</label> <br />
				<input
					id='new-todo'
					onChange={this.handleChange}
					value={this.state.text}
				/>
				<button> Add</button>
			</form>
		);
	}
}
export default connect(
	null,
	{ addToDo }
)(NewToDo);
