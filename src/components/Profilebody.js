import React, { useState, useEffect } from 'react';
import '../styles/ProfileBody.css';

const ProfileBody = () => {
  const [profileContent, setProfile] = useState([]);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://13.201.49.150:8080/v1/portfolio/get/Profile');
        if (!response.ok) {
          
          throw new Error('Failed to fetch project data');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://13.201.49.150:8080/v1/portfolio/get/Resume');

      if (!response.ok) {
        throw new Error('Failed to submit email');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="profile" className="profile-container">
      <div className="profile-content">
        <div className="profile-image">
          <img src="http://13.201.49.150:8080/v1/portfolio/get/profileImg" alt="Profile" />
        </div>
        {profileContent.map((profileData) => (
          <div className="profile-text" key={profileData.id}>
            <h2 className="profile-title">{profileData.title}</h2>
            <p className="profile-desc">{profileData.description}</p>
            <a href='http://13.201.49.150:8080/v1/portfolio/get/Resume' download="Resume.pdf">
            <button className="btn" onClick={handleSubmit} >Get Resume</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileBody;
