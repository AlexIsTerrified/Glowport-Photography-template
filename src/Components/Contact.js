import React, {Component} from 'react';
import NotFound from './NotFound.js';

export default class Contact extends Component{
	state = {
		error: false,
		isLoaded:true,
	}
	
	componentDidMount(){
		//change this String value to change the Contact page title.		
		document.title = "Photography Site - Contact";
	}
	
	load(){
		const {error, isLoaded} = this.state;
		if (this.state.error)return (<NotFound/>);
		
		else if(!isLoaded)
			return (
				<div className="lds-ripple"><div></div><div></div></div>
				);
		
		else
			return (
				<div className="thread">
				<div className="image-thread" style={{backgroundImage:'url("img/0.jpg")'}}>
				</div>
				<div className="paper-thread">
					<h1>Contact Us.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
					<form>
						<input className="text" placeholder="Your Name" required></input>
						<input className="text" placeholder="Your Email" required></input>
						<input className="text" placeholder="Your Subject" required></input>
						<textarea className="message" placeholder="Message" required></textarea>
						<button>Submit</button>
					</form>
				</div>
				</div>
			);
	}
	
	render(){
	return this.load();
	}
}