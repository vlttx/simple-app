import React, { Component } from 'react';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';
import { connect } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class ToDoContainer extends Component {
	render() {
		return (
			<MDBContainer>
				<MDBRow>
					<MDBCol md='9' className='mb-r'>
						<h3>To Do List:</h3>
						<ToDoList items={this.props.items} />
					</MDBCol>
					<MDBCol xl='3' md='6' className='mx-auto text-center'>
						<NewToDo />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

const mapStateToProps = state => {
	return { items: state.items };
};

export default connect(mapStateToProps)(ToDoContainer);
