import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/ToDos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
	MDBBtn,
	MDBInput,
	MDBModal,
	MDBIcon,
	MDBBadge,
	MDBContainer,
	MDBRow,
	MDBCol
} from 'mdbreact';

class NewToDo extends Component {
	state = { text: '', id: null, complete: false };

	handleChange = e => {
		this.setState({ text: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		const newItem = {
			text: this.state.text,
			id: Date.now(),
			complete: false
		};
		this.props.addToDo(newItem);
		this.setState({ text: '', id: null, complete: false });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					id='new-todo'
					onChange={this.handleChange}
					value={this.state.text}
				/>
				<MDBCol xl='3' md='6' className='mx-auto'>
				<MDBBtn color='info'> Add</MDBBtn>
				</MDBCol>
			</form>
		);
	}
}
export default connect(
	null,
	{ addToDo }
)(NewToDo);
