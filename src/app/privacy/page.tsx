import React from 'react';
import { Privacy } from '@/app/websites';

export const metadata = {
  title: 'Privacy Policy — Text Before You Send',
  description: 'Privacy policy for Text Before You Send. How we handle data and cookies.',
};

export default function PrivacyPage() {
  return (
    <div className="page-wrapper">
      <div className="card card--light">
        <Privacy />
      </div>
    </div>
  );
}
