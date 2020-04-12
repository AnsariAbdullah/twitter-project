import React, { Component } from 'react';
import './background.scss'

class Background extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pictures: [],
		}
	}
	componentDidMount() {
		fetch('https://randomuser.me/api/?results=50')
		.then(results => {
			return results.json();
		}).then(data => {
			let pictures = data.results.map((pic) => {
				return(
					<div key={pic.results}>
						<img src={pic.pictures.medium} />
					</div>
				)
			})
			this.setState({pictures: pictures});
			console.log("state", this.state.pictures)
		})
	}
	render() { 
		return (
			<div className="container">
				{this.state.pictures}
			</div>
		);
	}
}
 
export default Background;