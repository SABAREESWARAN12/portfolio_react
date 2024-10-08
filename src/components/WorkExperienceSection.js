import React from 'react';
import '../styles/WorkExperienceSection.css';

const WorkExperienceSection = () => {
  const workExp = [{
    "_id": 1,
    "role": "Java Developer",
    "organization": "Bankbazaar.com",
    "year": "2023-Present",
    "description": "Expertize in developing the architecture of microservices.  And hands on Experience in Springboot microservice projects",
    "_class": "com.sabareeswaran.portfolio.Dto.WorkExperience"
  }];

  return (
    <section id="work-experience" className="work-container">
      <h2 className="work-title">Work Experience</h2>
      <div className="work-timeline">
        {workExp.map((value) =>
                <div className="work-item" key={value.id}>
                <div className="work-content">
                  <h3>{value.role}</h3>
                  <h4>{value.organization}</h4>
                  <span className="work-date">{value.year}</span>
                  <p>
                    {value.description}
                  </p>
                </div>
                <div className="work-marker"></div>
              </div>
        )}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
