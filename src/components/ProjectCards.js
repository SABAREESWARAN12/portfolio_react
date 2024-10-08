import React from 'react';
import '../styles/ProjectCards.css';

const ProjectCards = () => {
  const projects = [{
    "_id": 1,
    "title": "Hydromark",
    "description": "A static website to showcase products of the client to establish the quality and quantity services they provide...",
    "link": "https://hydromark.in/",
    "_class": "com.sabareeswaran.portfolio.Dto.Projects"
  },
  {
    "_id": 2,
    "title": "Portfolio",
    "description": "To ensure the back bone strong the carier to show as a thropy",
    "link": "http://www.sabareeswaran.info/",
    "_class": "com.sabareeswaran.portfolio.Dto.Projects"
  },
  {
    "_id": 3,
    "title": "dev-todo",
    "description": "Todo app to manage and maintain the task or projects which were assigned to a develop by ensuring the email intimations to the dead line and notified based on the priority",
    "link": "#",
    "_class": "com.sabareeswaran.portfolio.Dto.Projects"
  }];

  return (
    <section id="projects" className="project-cards">
      <h2 className="project-title">Projects</h2>
      <div className="card-container">
        {projects.map((project) => (
          <a className="project-card" href={project.link} key={project.id}>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-description">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
