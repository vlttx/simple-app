import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';

const ToDoList = props => {
	return (
		<div>
			{props.items ? (
				<ul>
					{props.items.map(item => (
						<ToDoItem key={item.id} text={item.text} />
					))}
				</ul>
			) : (
				<h3>No tasks yet</h3>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return { items: state.ToDos };
};

export default connect(mapStateToProps)(ToDoList);
