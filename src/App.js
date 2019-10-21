import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/pages/Homepage';
import Homepage from './components/pages/Homepage';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Homepage />
			</header>
		</div>
	);
}

export default App;
