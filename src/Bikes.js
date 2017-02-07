import React, { Component } from 'react';

const BIKE_URL = 'https://jujhar.com/bikes.json';

class Bikes extends Component {

	componentDidMount() {
		fetch(BIKE_URL)
		.then( response => {
			console.log( response );
			if( response.ok ) return response.json();
			else throw 'Could not reach data URI';
		})
		.then( body => body.items )
		.then( bikes => { this.setState( { bikes: bikes } ) } );
	}

	constructor(props) {
		super(props);
		this.state = {
			bikes: []
		};
	}

	getBikeList() {
		return ( this.state.bikes.map( bike => <li>{ bike.name }</li> ) );
	}

	render() {
		return (
			<ol>{ this.getBikeList() }</ol>
		);
	}
}

export default Bikes;
