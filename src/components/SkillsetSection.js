import React from 'react';
import '../styles/SkillsetSection.css';

const SkillsetSection = () => {
  const skills = [
    {
      "id":1,
      "title": "SpringBoot",
      "description":"To Build an interactive and seamless rest api which communicates with the awfull front-ends"
    },
    {
      "id": 2,
      "title": "React.js",
      "description": "To build the responsive and interactive front-end to connect seamless with back ends"
  },
  {
    "id":3,
    "title": "Jenkins",
    "description": "To integration an seamless CI/CD pipeline for the projects"
  },
  {
    "id":4,
    "title": "SQL & mongoDb",
    "description":"To Ensure the memory of the application to strong as humans so going on with the SQL and No-SQL mongoDb"
}
  ]

  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-title">Skillsets</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsetSection;
