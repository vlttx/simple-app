import React from 'react';

export default function ToDoList(props) {
	return (
		<div>
			{props.items ? (
				<ul>
					{props.items.map(item => (
						<li key={item.id}>{item.text}</li>
					))}
				</ul>
			) : (
				<h3>No tasks today</h3>
			)}
		</div>
	);
}
