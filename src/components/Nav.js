import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
	return(
		<nav className="navbar navbar-default navbar-fixed-top">
	    <div className="container-fluid">
	      <div className="navbar-header">
	        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	          <span className="icon-bar"></span>
	          <span className="icon-bar"></span>
	          <span className="icon-bar"></span>                        
	        </button>
	        <Link className="navbar-brand" to='/'>Sang Tran</Link>
	      </div>
	      <div className="collapse navbar-collapse" id="myNavbar">
	        <ul className="nav navbar-nav navbar-right">
	          <li><NavLink activeClassName="active" to='/'>Portfolio</NavLink></li>
						<li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
						<li><NavLink activeClassName="active" to='/contact'>Contact</NavLink></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
	);
}

export default Nav;