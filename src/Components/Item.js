import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotFound from './NotFound.js';

export default class Item extends Component{
	state = {
		item:{},
		isLoaded: false,
		};
	componentWillMount(){
		fetch("/images.json").then(res => res.json()).then(
					(result) => {
						this.setState({
						isLoaded: true,
						item: result[this.props.match.params.id]
						});
						console.log(result);
					},
					(error) => {
						this.setState({
							isLoaded: true,
							error
						});
						console.log(error);
					}
				)
	}
	
	load() {
			const { error, isLoaded, item } = this.state;
			if(!isLoaded)return (<div className="lds-ripple"><div></div><div></div></div>);
			else if (error || item==null)return (<NotFound/>);
			else
				{
					document.title = 'Photography site - '+this.state.item.name;
					return (
						<div className="item-thread">
							<div className="paper-thread">
							<h1 style={{textAlign:'center',margin: '0 0 20px'}}>{this.state.item.name}</h1>
								<img src={this.state.item.url} alt="" ></img>
								<p>{this.state.item.desc}</p>
							</div>
						</div>
					);
				}
				
		}

	render(){
		return this.load();
	}
}