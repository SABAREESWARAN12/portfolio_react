import React,{useState, useEffect} from 'react';
import '../styles/EducationRoadmap.css';

const EducationRoadmap = () => {
  const [api, update] =useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://13.201.49.150:8080/v1/portfolio/get/Education');
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
