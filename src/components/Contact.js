import React from 'react';
import '../css/Contact.css';

const Contact = () => {
	return(
		<div>
			<h2 className='title'>Contact</h2>
			<div className="contact-section">
  				<p>If you have to tell me something, or just to say 'Hello!' send me a email at
        		<a id="email" href="mailto:tony_633@hotmail.com">tony_633@hotmail.com</a>
      			</p>  
    		</div>
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
		</div>
	);
}

export default Contact;