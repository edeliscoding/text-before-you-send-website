import React from 'react';
import { Contact } from '@/app/websites';

export const metadata = {
  title: 'Contact — Text Before You Send',
  description: 'Contact Text Before You Send for support, partnerships, or feedback.',
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <div className="card card--light">
        <Contact />
      </div>
    </div>
  );
}
