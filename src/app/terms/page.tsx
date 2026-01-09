import React from 'react';
import { Terms } from '@/app/websites';

export const metadata = {
  title: 'Terms — Text Before You Send',
  description: 'Terms of service for using Text Before You Send.',
};

export default function TermsPage() {
  return (
    <div className="page-wrapper">
      <div className="card card--light">
        <Terms />
      </div>
    </div>
  );
}
