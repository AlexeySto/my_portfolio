import React, { useState, useEffect } from 'react';
import Project from '../../components/Project';
import { projects } from './../../helpers/projectsList';
import './style.css';

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const rootWidth = document.getElementsByClassName('root').offsetWidth;
	const itemsPerPage = rootWidth >= 1026 ? 3 : rootWidth >= 816 ? 2 : 1;
	const maxIndex = Math.ceil(projects.length / itemsPerPage);

	const nextPage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
	};

	const prevPage = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + maxIndex) % maxIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextPage();
		}, 5000);
	
		return () => clearInterval(interval); // Очистка таймера при размонтировании
	}, [maxIndex]);

	return (
		<div className="container">
			<h2 className="title-1">Мои проекты</h2>
			<div className="projects-navigation">
				<div onClick={prevPage} disabled={currentIndex === 0}><svg className="slide__svg" viewBox="0 0 32 32"><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/></svg></div>
				<ul className="projects">
					{projects.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((project, index) => (
						<Project
							key={index}
							title={project.title}
							img={project.img}
							index={project.id - 1}
						/>
					))}
				</ul>
				<div onClick={nextPage} disabled={currentIndex === maxIndex - 1}><svg className="slide__svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right"/></svg></div>
			</div>
		</div>
	);
};

export default Projects;
