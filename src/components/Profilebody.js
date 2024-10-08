import React from 'react';
import '../styles/ProfileBody.css';
import profileimg from '../assets/profile.png'

const ProfileBody = () => {
  const profileContent = [{
    "_id": 1,
    "title": "Hi I'm Sabareeswaran",
    "description": "Extensive experience in designing and developing enterprise-level Spring Boot applications and microservices. I am skilled in RESTful API development with security and building highly scalable solutions with Spring Cloud technologies.  Proficient in setting up and maintaining CI/CD pipelines using Jenkins, GitHub Actions, and other automation tools to ensure seamless integration and delivery of code."
}]

  return (
    <section id="profile" className="profile-container">
      <div className="profile-content">
        <div className="profile-image">
          <img src={profileimg} alt="Profile" />
        </div>
        {profileContent.map((profileData) => (
          <div className="profile-text" key={profileData.id}>
            <h2 className="profile-title">{profileData.title}</h2>
            <p className="profile-desc">{profileData.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileBody;
