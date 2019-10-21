import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList(props) {
	return (
		<div>
			{props.items ? (
				<ul>
					{props.items.map(item => (
						<ToDoItem key={item.id} text={item.text} />
					))}
				</ul>
			) : (
				<h3>No tasks today</h3>
			)}
		</div>
	);
}
