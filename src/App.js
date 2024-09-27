import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import ProfileBody from './components/Profilebody';
import EduRoadMap from './components/EducationRoadmap';
import WorkExperience from './components/WorkExperienceSection';
import SkillSet from './components/SkillsetSection';
import Project from './components/ProjectCards';
import Contact from './components/ContactSection';
import NotFound from './components/NotFound';
function App() {

  const [isApiActive, setApiActive] = useState(true);

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await fetch('http://13.201.49.150:8080/v1/portfolio/get/Profile');
        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }
      } catch (err) {
        setApiActive(false);
        console.log(isApiActive);
        console.log(err);
      }
    };
    checkApi();
  }, []);

  if (isApiActive){
    return (
      <>
      <Navbar />
      <ProfileBody />
      <EduRoadMap/>
      <SkillSet/>
      <WorkExperience/>
      <Project/>
      <Contact/>
      </>
    );
  } else {
    return (
      <NotFound />
    );
  }
}

export default App;
