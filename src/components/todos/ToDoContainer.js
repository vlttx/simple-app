import React, { Component } from 'react';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';
import { connect } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class ToDoContainer extends Component {
	render() {
		return (
			<>
				<h3>To Do List:</h3>
				<ToDoList items={this.props.items} />
				<NewToDo />
			</>
		);
	}
}

const mapStateToProps = state => {
	return { items: state.items };
};

export default connect(mapStateToProps)(ToDoContainer);
