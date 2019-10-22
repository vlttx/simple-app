import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteToDo, completeToDo } from '../actions/ToDos';

class ToDoItem extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = () => {
			this.props.deleteToDo(this.props.id);
		};
		this.handleCheckbox = event => {
			event.preventDefault();

			const updatedItem = {
				text: this.props.text,
				id: this.props.id,
				complete: true
			};
			this.props.completeToDo(updatedItem);
		};
	}

	render() {
		return (
			<div>
				{this.props ? (
					this.props.complete ? (
						<>
							<h5
								style={{
									textDecorationLine: 'line-through',
									textDecorationStyle: 'solid'
								}}
							>
								<input
									type='checkbox'
									checked={this.props.complete}
									onChange={this.handleCheckbox}
								/>
								{this.props.text}{' '}
								<button type='submit' onClick={this.handleDelete}>
									Delete
								</button>
							</h5>
						</>
					) : (
						<>
							<h5>
								<input
									type='checkbox'
									checked={this.props.complete}
									onChange={this.handleCheckbox}
								/>
								{this.props.text}{' '}
								<button type='submit' onClick={this.handleDelete}>
									Delete
								</button>
							</h5>
						</>
					)
				) : (
					<h5>"No complete tasks")</h5>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { todos: state.todos };
};

export default connect(
	mapStateToProps,
	{ deleteToDo, completeToDo }
)(ToDoItem);
