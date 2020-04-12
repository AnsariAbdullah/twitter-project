import React, { Component } from 'react';
import './background.scss'

class Background extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			person: null
		}
	}
	async componentDidMount() {
		const url = "https://randomuser.me/api/?result=50";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ person: data.results[0],loading: false })
		console.log(data.results[0].name.first)
	}
	render() { 
		return (
			<div>
				{
					this.state.loading || !this.state.person ?
					<h1>Loading...</h1>:
					<div className="container">
						<div>{this.state.person.name.title}</div>
						<div>{this.state.person.name.first}</div>
						<div>{this.state.person.name.last}</div>
						<img src={this.state.person.picture.large} />
					</div>
				}
			</div>
		);
	}
}
 
export default Background;