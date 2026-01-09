'use client';

import React from 'react';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  featured: boolean;
}

interface PricingProps {
  onGetApp: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onGetApp }) => {
  const tiers: PricingTier[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for getting started',
      price: '$0',
      period: 'Forever',
      features: [
        '3 message analyses per day',
        '5 voice-to-text transcriptions per day',
        'AI-powered tone analysis',
        'Sentiment insights',
        'Basic message evaluation'
      ],
      featured: false
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Unlock Dating Mode + unlimited analyses',
      price: 'Free for 7 days, then $2.99',
      period: 'per month',
      features: [
        '🔥 Dating Mode - Full message analysis for dating',
        '50 message analyses per day',
        '💡 Interest level detection',
        '🚩 Red flag alerts for incoming messages',
        '⏰ Smart reply timing suggestions',
        '🎤 15 voice-to-text transcriptions per day',
        'Advanced sentiment analysis'
      ],
      featured: true
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that works best for you</p>
        </div>

        <div className="pricing-cards">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.featured ? 'featured' : ''}`}
            >
              {tier.featured && <div className="badge">Most Popular</div>}
              
              <h3 className="pricing-name">{tier.name}</h3>
              <p className="pricing-description">{tier.description}</p>
              
              <div className="pricing-price">{tier.price}</div>
              <p className="pricing-period">{tier.period}</p>
              
              <ul className="pricing-features">
                {tier.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <button
                className="btn pricing-button"
                onClick={onGetApp}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'rgba(255, 255, 255, 0.6)' }}>
          Start free forever. Upgrade to Premium for advanced features like Dating Mode.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
