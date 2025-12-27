'use client';

import Image from 'next/image';
import React from 'react';

interface HeroProps {
  onGetApp: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetApp }) => {
  return (
    <section className="container">
      <div className="hero">
        <div className="hero-content">
          <h1>Understand How Your Message Will Be Received</h1>
          <p>
            AI-powered analysis of your messages before you send them. Get instant insights on tone, 
            sentiment, and how your words might be perceived. Perfect for important conversations, 
            dating messages, and professional communication.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={onGetApp}>
              Download on App Store
            </button>
            {/* <button className="btn btn-secondary">
              Learn More
            </button> */}
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <Image src="/images/hero.png" alt="App Mockup" width={500} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
