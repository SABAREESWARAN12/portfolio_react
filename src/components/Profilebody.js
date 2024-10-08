import React from 'react';
import '../styles/ProfileBody.css';
import profileimg from '../assets/profile.png'

const ProfileBody = () => {
  const profileContent = [{
    "_id": 1,
    "title": "Hi I'm Sabareeswaran",
    "description": "I’m a passionate Java Developer based in the Tamil Nadu India, with a focus on creating beautiful and user-friendly digital experiences. With over 1+ years of experience, I help businesses transform ideas into successful products. I believe in simplicity and inspiration"
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
