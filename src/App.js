import React, { Component } from 'react';
import './App.css';
import './components/pages/Homepage';
import Homepage from './components/pages/Homepage';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<Homepage />
				</header>
			</div>
		);
	}
}

export default App;
