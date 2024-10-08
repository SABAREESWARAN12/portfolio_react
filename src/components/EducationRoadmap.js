import React from 'react';
import '../styles/EducationRoadmap.css';

const EducationRoadmap = () => {
  const api = [{
    "_id": 1,
    "year": "2018-2022",
    "qualification": "Bachelor of Engineering",
    "institution": "KSR College of Engineering",
    "_class": "com.sabareeswaran.portfolio.Dto.EducationQualification"
  },
  {
    "_id": 2,
    "year": "2022-2023",
    "qualification": "Java FullStack Developer",
    "institution": "Qspider institution",
    "_class": "com.sabareeswaran.portfolio.Dto.EducationQualification"
  }]
  return (
    <section id="about" className="roadmap-container">
      <h2 className="roadmap-title">Education Roadmap</h2>
      <div className="timeline">
        {api.map((value) => (
                <div className="timeline-event" key={value.id}>
                  <div className="event-content">
                    <h3>{value.year}</h3>
                    <h4>{value.qualification}</h4>
                    <p>{value.institution}</p>
                  </div>
                  <div className="event-marker"></div>
                </div>
          ))}
      </div>
    </section>
  );
};

export default EducationRoadmap;
