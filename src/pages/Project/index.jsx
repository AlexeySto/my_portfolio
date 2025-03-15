import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ButtonGitHub from "./../../components/ButtonGitHub";
import { projects } from "./../../helpers/projectsList";
import GoBackButton from "../../components/GoBackButton";
import './style.css';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = project.images.length;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maxIndex) % maxIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval); // Очистка таймера при размонтировании
  }, [maxIndex]);

  return (
    <div className="container_scroll">
      <div className="box-button">
        <GoBackButton />
      </div>
      <div className="project-details">
        <h1 className="title-1">{project.title}</h1>
        <div className="projects-navigation">
          <div onClick={prevImage} className="arrow-button">
            <svg className="slide__svg" viewBox="0 0 32 32">
              <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" />
            </svg>
          </div>
            <img className="project-details__img"
              src={project.images[currentIndex]}
              alt={project.title}
            />
          <div onClick={nextImage} className="arrow-button">
            <svg className="slide__svg" viewBox="0 0 32 32">
              <path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" />
            </svg>
          </div>
        </div>
      
        <span className="project-details__desc">
          Skills: {project.skills}
        </span>

        {project.gitHubLink && (
          <ButtonGitHub link={project.gitHubLink} />
        )}

        <span className="project-details__desc">{project.description}</span>
      </div>
    </div>
  );
}

export default Project;
