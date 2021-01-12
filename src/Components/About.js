import React, {Component} from 'react';
import NotFound from './NotFound.js';

export default class About extends Component{
	state = {
		error: false,
		isLoaded:true,
	}
	
	componentDidMount(){
		//change this String value to change the About page title.		
		document.title = "Photography Site - About";
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
				<div className="trail">
					<div className="paper-trail">
						<div>
							<img src="./img/title-image.jpg"/>
							<div>
								<h1>Lorem ipsum</h1>
								<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
								<i>emailaddress@email.com</i>
								<br/>
								<br/>
								<a href="mailto:#"><button>Email</button></a>
							</div>
						</div>
						<div>
							<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
							<p> In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

						</div>
					</div>
				</div>
			);
	}
	
	render(){
	return this.load();
	}
}
