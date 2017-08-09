import React from 'react';
import '../css/Footer.css';

const Footer = () => {
	return(
		<footer id="myFooter">
	        <div className="container">
	        <p className="footer-copyright">Created By: SANG TRAN</p>
	        </div>
	        <div className="footer-social">
	        	<a href="https://www.freecodecamp.org/sangtran01" className="social-icons"><i className="fa fa-free-code-camp"></i></a>
	            <a href="https://github.com/SangTran01" className="social-icons"><i className="fa fa-github"></i></a>
	            <a href="#" className="social-icons"><i className="fa fa-google-plus"></i></a>
	            <a href="https://www.linkedin.com/in/sang-t-814ba9140/" className="social-icons"><i className="fa fa-linkedin"></i></a>
	        </div>
	    </footer>
	);
}

export default Footer;