import React from 'react';
import '../css/About.css';

const About = () => {
	return(
		<div>
			<h2 className="title">About Me</h2>

	    <div className="about-section">
	      <p className='text-indent'>My name is Sang Tran a junior web developer with 3 years of experience in web development, my objective is to get a job in the web development industry so that I can learn new techniques to improve my programming and more importantly help others in future projects. I'm from Hamilton, Ontario Canada and am very opened to working outside of the city. As of now, I've completed Udacity's Full-Stack nanodegree and FreeCodeCamp's Front-End course and am currently working towards mastering ReactJS and completing FreeCodeCamp's Back-end course.</p>

	      <p>I'm experienced in..</p>
	      <h4>Front-end technologies</h4>
	      <ul>
	        <li>HTML5</li>
	        <li>CSS3</li>
	        <li>Javascript</li>
	        <li>React.js</li>
	        <li>ES6</li>
	        <li>Git</li>
	        <li>Github</li>
	      </ul>
	      <h4>Back-end technologies</h4>
	      <ul>  
	        <li>MongoDB</li>
	        <li>Node.js</li>
	        <li>NPM</li>
	        <li>Python</li>
	        <li>Flask</li>
	        <li>PostgreSQL</li>
	      </ul>
	      <h4>Things i've played around with..</h4>
	      <ul>
	        <li>Ejs templates</li>
	        <li>Babel</li>
	        <li>Webpack</li>
	      </ul>
	      <h4>Digital Marketing skills</h4>
	      <ul>
	        <li>SEO</li>
	        <li>SEM</li>
	      </ul>

	    </div>
	    <footer id="aboutFooter">
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

export default About;