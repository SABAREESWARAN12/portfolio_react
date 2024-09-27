import React,{useState, useEffect} from 'react';
import '../styles/WorkExperienceSection.css';

const WorkExperienceSection = () => {

  const [workExp, update] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://13.201.49.150:8080/v1/portfolio/get/WorkExp');
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
