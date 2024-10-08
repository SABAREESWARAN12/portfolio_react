import React from 'react';
import '../styles/SkillsetSection.css';

const SkillsetSection = () => {
  const skills = [
    {
      "id":1,
      "title": "SpringBoot",
      "description":"To build a robust and security fullfilled RESTfull apis for seamless integration between microservices and for front-ends"
    },
    {
      "id": 2,
      "title": "React.js",
      "description": "To build a interative and pleasant ui designs to communicate with both apis and viewers"
  },
  {
    "id":3,
    "title": "Jenkins",
    "description": "To ensure the continuous integration and deployment the jenkins take a step ahead"
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
