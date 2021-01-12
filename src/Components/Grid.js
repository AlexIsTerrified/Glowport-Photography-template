import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotFound from './NotFound.js';

class Grid extends Component{
	state = {
		width: window.innerWidth,
		items:[],
		isLoaded: false,
		};
	
	handleResize = this.handleResize.bind(this);		
	
	handleResize(){
		this.setState({width:window.innerWidth});
		}
	
	componentDidMount() {
		//this code fetches images and information from an images.JSON file in the public folder as if it came from a collection.
		// the information about the images is saved in the 'items' index in the state.
		// each item should have an image url and a name for the code to work.
		window.addEventListener('resize', this.handleResize);
		fetch("images.json").then(res => res.json()).then(
					(result) => {
						this.setState({
						isLoaded: true,
						items: result
						});
					},
					(error) => {
						this.setState({
							isLoaded: true,
							error
						});
					}
				)
		//change this String value to change the Home page title.		
		document.title = "Photography Site";
		}
	componentWillUnmount() {
			window.removeEventListener('resize', this.handleResize);
		}
	load() {
			const { error, isLoaded, items } = this.state;
			if (error)return (<NotFound/>);
			else if(!isLoaded)return (<div className="lds-ripple"><div></div><div></div></div>);
			else
				{
					if(this.state.width < 500)
						return (<React.Fragment>
							<div className="column">
								{items.map((ob, a) => {if(a%2===0)return (
									<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							</div>
							<div className="column">
								{items.map((ob, a) => {if(a%2===1)return (
									<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							</div>
						</React.Fragment>	
						);
					else if(this.state.width < 820)
					return (<React.Fragment>
							<div className="column">
								{items.map((ob, a) => {if(a%3===0)return (
									<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							
							</div>
							<div className="column">
								{items.map((ob, a) => {if(a%3===1)return (
									<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							</div>
							<div className="column">
								{items.map((ob, a) => {if(a%3===2)return (
									<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							</div>
						</React.Fragment>
							);

					else
						return (<React.Fragment>
							<div className="column">
								{items.map((ob, a) => {if(a%4===0)return (
									<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							
							</div>
							<div className="column">
								{items.map((ob, a) => {if(a%4===1)return (
									<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							</div>
							<div className="column">
								{items.map((ob, a) => {if(a%4===2)return (
									<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							</div>
							<div className="column">
								{items.map((ob, a) => {if(a%4===3)return (
								<Link key={a} to={`/items/${a}`}><div><img src={ob['url']} alt=""></img><b>{ob['name']}</b></div></Link>
									)})}
							</div>
						</React.Fragment>
							);
					}
			}
			
			
			render(){
				return (
				<>
					<div className="m-grid">
					{this.load()}
					</div>
				</>
				);
			}

	}
export default Grid;
