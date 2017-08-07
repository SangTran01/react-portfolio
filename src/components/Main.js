import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';


const Main = () => {
	return(
		<div className="container-fluid">
			<Switch>
				<Route exact path='/' component={Portfolio} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</div>
	);
}

export default Main;