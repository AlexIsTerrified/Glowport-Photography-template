import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import './css/main.css';
import Snow from './Snow-animation.js';
import Navbar from './navbar.js';
import Grid from './Components/Grid.js';
import Resume from './Components/Resume.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import NotFound from './Components/NotFound.js';
import Item from './Components/Item.js';

class App extends React.Component{
	state = {
		title: '',
		header:''
	}
	
	componentWillMount(){
		this.setState({
			title:'Lorem ipsum',
			header:'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
		});
		
	}
	componentDidMount(){
				new Snow();
	}
	
	render(){
		 $(window).on('scroll',function(){
			 if($(window).scrollTop() >= 340){
				 $('nav').addClass('black');
			 }else{
				 $('nav').removeClass('black');
			 }
		})
		return (
			<Router>
			<canvas id="canvasbg"></canvas>
				<div className="main">
				<div className="header-container">
					<div className="header">
						<div className="avatar">
							<div>
								<div style={{backgroundImage:'url("/img/title-image.jpg")'}}></div>
							</div>
						</div>
						<div className="info">
							<h1>{this.state.title}</h1>
							<p>{this.state.header}</p>
						</div>
					</div>
				</div>					
				<Navbar/>
				
				
				<div className="body">
				<Switch>
					<Route path="/" component={Grid} exact />
					<Route path="/items/:id" component={Item} exact/>
					<Route path="/Resume" component={Resume} exact />
					<Route path="/About" component={About} exact />
					<Route path="/Contact" component={Contact} exact />
					<Route path="/*" component={NotFound}/>
				</Switch>
				</div>
				<Footer/>
				</div>
			</Router>
				);
	}
}



export default App;

