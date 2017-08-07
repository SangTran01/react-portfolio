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
		</div>
	);
}

export default Contact;