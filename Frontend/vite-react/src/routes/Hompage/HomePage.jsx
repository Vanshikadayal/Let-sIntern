import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="homepage-container">
      <div className="content">
        <h1>Welcome to Our Platform</h1>
        <p>Your journey starts here. Let's make it amazing!</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default Homepage;
  