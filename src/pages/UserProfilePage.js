// src/pages/UserProfilePage.js
import React from 'react';
import useUserProfile from '../hooks/useUserProfile';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const { profile, updateProfile } = useUserProfile();

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    updateProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input type="text" name="name" value={profile.name} onChange={handleProfileChange} placeholder="Name" />
      <input type="email" name="email" value={profile.email} onChange={handleProfileChange} placeholder="Email" />
    </div>
  );
};

export default UserProfilePage;
