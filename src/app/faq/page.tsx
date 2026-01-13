import React from 'react';
import { FAQ } from '@/app/websites';

export const metadata = {
  title: 'FAQ — Text Before You Send',
  description: 'Frequently asked questions about Text Before You Send.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="page-wrapper">
      <div className="card card--light">
        <FAQ />
      </div>
    </div>
  );
}
