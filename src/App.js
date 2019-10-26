import React, { Component } from 'react';
import './App.css';
import './components/pages/Homepage';
import Homepage from './components/pages/Homepage';
import { Route, Switch } from 'react-router-dom';


const RandomPage = () => (
	<div>
		<h1>RANDOMNESS</h1>
	</div>
);

const ExamplePage = () => (
	<div>
		<h1>EXAMPLE</h1>
	</div>
);

const SpecialTodo = props => {
	console.log(props.match);
	return (
		<div>
			<h1>Special To Do</h1>
		</div>
	);
};

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route exact path='/random' component={RandomPage} />
						<Route exact path='/example' component={ExamplePage} />
						<Route exact path='/todos/:todoId' component={SpecialTodo} />
					</Switch>
				</header>
			</div>
		);
	}
}

export default App;
