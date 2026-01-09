'use client';

import React from 'react';
import '../styles/home.css';
import Image from 'next/image';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const handleGetApp = () => {
    window.open('https://apps.apple.com/us/app/text-before-you-send/id6756531156', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="navbar-logo">
            <span>
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
            </span>
            <span>Text Before You Send</span>
          </div>
        </div>

        <div className="navbar-links">
          <Link href="/features">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <button className="btn btn-primary" onClick={handleGetApp}>
            Get the App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
