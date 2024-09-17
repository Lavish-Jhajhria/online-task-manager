// src/hooks/useUserProfile.js
import { useState, useEffect, useDebugValue } from 'react';

const useUserProfile = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || { name: '', email: '' };
    setProfile(savedProfile);
  }, []);

  useDebugValue(profile ? 'User Profile Loaded' : 'Loading User Profile...');

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem('userProfile', JSON.stringify(newProfile));
  };

  return { profile, updateProfile };
};

export default useUserProfile;
