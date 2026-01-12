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
          <h1>Say it better, before you send it</h1>
          <p>
           TextBeforeYouSend is your <span className='text-orange'>text coach</span> that helps you write clear, confident messages for important conversations and dating—so you sound like yourself, on your best day.
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
