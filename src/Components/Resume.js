import React, {Component} from 'react';
import NotFound from './NotFound.js';

export default class Resume extends Component{
	state = {
		error: false,
		isLoaded:true,
		events:[]
	}
	
	componentDidMount(){
		//To change the events just change the values in the 'e' array.
		//All objects must have a name, date, decription and image otherwise the code will break.
		//you can rewrite the code at line 51 to fit the needs of your project events.
		var e = [
			{
				name:"Event",
				date: "12/12/20",
				description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.",
				image:"img/5.jpg"
			},
			{
				name:"Event",
				date: "12/12/20",
				description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.",
				image:"img/4.jpg"
			},
			{
				name:"Event",
				date: "12/12/20",
				description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.",
				image:"img/2.jpg"
			}
		]
		
		this.setState({events:e});
		
		//change this String value to change the Resume page title.		
		document.title = "Photography Site - Resume";
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
				<div className="item-thread">
				{this.state.events.map((i,a)=>{
					return <div key={a} className="item">
						<div className="image">
							<img src={i.image}/>
						</div>
						<div className="info">
							<h3>{i.name}</h3>
							<i>{i.date}</i>
							<p>{i.description}</p>
						</div>
					</div>
				})}
					
				</div>
			);
	}
	
	render(){
	return this.load();
	}
}