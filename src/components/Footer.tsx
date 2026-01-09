'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <nav className="footer-nav">
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div style={{ textAlign: 'right' }}>
          <p className="footer-small">© 2026 Text Before You Send. All rights reserved.</p>
          <p className="footer-small">Crafted with care to help you communicate better.</p>
          <nav className="footer-nav" style={{ marginTop: '0.5rem' }}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
