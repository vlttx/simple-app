import React, { Component } from 'react';

export default class NewToDo extends Component() {
	constructor() {
		super();
		this.state = {
			items: [],
			text: ''
		};

		this.handleChange = e => {
			this.setState({ text: e.target.value });
		};
		this.handleSubmit = e => {
			e.preventDefault();
			if (!this.state.text.length) {
				return;
			}
			const newItem = {
				text: this.state.text,
				id: Date.now()
			};
			this.setState(state => ({
				items: state.items.concat(newItem),
				text: ''
			}));
		};
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='new-todo'>Things that need to be done:</label> <br />
				<input
					id='new-todo'
					onChange={this.handleChange}
					value={this.state.text}
				/>
				<button> Add #{this.state.items.length + 1}</button>
			</form>
		);
	}
}
