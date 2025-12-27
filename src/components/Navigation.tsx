'use client';

import React from 'react';
import '../styles/home.css';
import Image from 'next/image';

const Navigation: React.FC = () => {
  const handleGetApp = () => {
    window.open('https://apps.apple.com/us/app/text-before-you-send/id6756531156', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span><Image src="/images/logo.png" alt="Logo" width={40} height={40} /> </span>
          <span>Text Before You Send</span>
        </div>
        <button className="navbar-button" onClick={handleGetApp}>
          Get the App
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
