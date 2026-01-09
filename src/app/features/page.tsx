import React from 'react';
import { Features } from '@/app/websites';

export const metadata = {
  title: 'Features — Text Before You Send',
  description: 'Features overview for Text Before You Send.',
};

export default function FeaturesPage() {
  return (
    <div className="page-wrapper">
      <div className="card card--light">
        <Features />
      </div>
    </div>
  );
}
