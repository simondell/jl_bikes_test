import React, { Component } from 'react';
import './App.css';
import Bikes from './Bikes';

class App extends Component {
	render() {
		return (
			<main>
				<header>
					<h1>The Best Bikes Around</h1>
					<p>We have all different kinds of bikes. You'll find what you want here. Best Price!</p>
				</header>
				<Bikes />
			</main>
		);
	}
}

export default App;
