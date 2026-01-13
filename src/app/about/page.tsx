import React from 'react';
import { About } from '@/app/websites';

export const metadata = {
  title: 'About — Text Before You Send',
  description: 'About Text Before You Send — our mission to help people review messages before sending.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <div className="card card--light">
        <About />
      </div>
    </div>
  );
}
