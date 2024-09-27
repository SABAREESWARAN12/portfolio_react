import React, { useState, useEffect } from 'react';
import '../styles/ProjectCards.css';

const ProjectCards = () => {

    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch('http://13.201.49.150:8080/v1/portfolio/get/Projects'); // Replace with your API URL
          if (!response.ok) {
            throw new Error('Failed to fetch project data');
          }
          const data = await response.json();
          setProjects(data);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchProjects();
    }, []);

  return (
    <section id="projects" className="project-cards">
      <h2 className="project-title">Projects</h2>
      <div className="card-container">
        {projects.map((project) => (
          <a className="project-card" href={project.link} target="_blank" key={project.id}>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-description">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
