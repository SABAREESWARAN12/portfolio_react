import React, { useState, useEffect } from 'react';
import '../styles/SkillsetSection.css';

const SkillsetSection = () => {
  const [skills, update] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://13.201.49.150:8080/v1/portfolio/get/Skills');
        if (!response.ok) {
          throw new Error('Failed to fetch api data');
        }
        const data = await response.json();
        update(data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchData();
  },[]);

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
