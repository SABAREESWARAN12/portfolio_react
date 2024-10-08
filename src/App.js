import React from 'react';
import Navbar from './components/navbar';
import ProfileBody from './components/Profilebody';
import EduRoadMap from './components/EducationRoadmap';
import WorkExperience from './components/WorkExperienceSection';
import SkillSet from './components/SkillsetSection';
import Project from './components/ProjectCards';
import Contact from './components/ContactSection';
function App() {
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
}

export default App;
