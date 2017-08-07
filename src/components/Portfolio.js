	import React, {Component} from 'react';
	import ProjectsApi from '../data';
	import '../css/Portfolio.css';

	const Portfolio = () => {

		const projects = ProjectsApi.all();

		return(
			<div>
				<h1 className='title'>Portfolio</h1>
				<div className="row">
					{
						projects.map((project, index) => (
							<div key={project.title} className="col-lg-4 col-sm-6 col-xs-12 img-container">
								<img className="proj-img" className="thumbnail img-responsive" src={project.image} alt={project.title} />
        				<div className="middle">
	        				<h3><a className="text" href={project.url} target="_blank">{project.title}</a></h3>
	        				<a className="text" href={project.gitUrl} target="_blank">GitHub</a>
        				</div>
        				<div className="middle-tools">
        					{
        						project.tools.map((tool, i) => (
        							<p className='icons'><i key={i} className={tool}></i></p>
        						))
        					}
        				</div>
      				</div>
						))
					}
				</div>
			</div>
		);
	}

	export default Portfolio;