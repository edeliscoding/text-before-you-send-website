'use client';

import Image from 'next/image';
import React from 'react';

interface Benefit {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const Benefits: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: 'AI Message Analysis',
      description:
        'Get instant AI-powered insights on your messages before you send them. Our advanced algorithm analyzes tone, sentiment, and emotional impact to help you understand how your words might be received.',
      features: [
        'Tone detection',
        'Sentiment analysis',
        'Message clarity insights',
        'Emotional impact assessment'
      ],
      image: 'pause-and-reflect.png'
    },
    {
      title: '🔥 Dating Mode',
      description:
        'Exclusive to premium members. Get specialized analysis for dating messages. Analyze both incoming messages and your replies to understand interest levels, red flags, and optimal timing for responses.',
      features: [
        'Upload screenshots of conversations',
        'Interest level analysis',
        'Red flag detection',
        'Reply timing suggestions',
        'Dating-specific tone analysis'
      ],
      image: 'stay-professional.png'
    },
    {
      title: 'Voice-to-Text',
      description:
        'Speak your message instead of typing. Our voice transcription feature converts your speech to text, which then gets analyzed before sending. Perfect for quick messages when you\'re on the go.',
      features: [
        'Real-time speech recognition',
        'Automatic transcription',
        'Voice-to-text analysis',
        'Works with any app'
      ],
      image: 'build-better-habits.png'
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Choose Text Before You Send?</h2>
        
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <ul className="benefit-list">
                {benefit.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="benefit-image relative w-[400px] h-[500px] overflow-hidden">
              <div className="image-placeholder ">
                 {/* [{benefit.title} Image Placeholder - 400x500px]  */}
                <Image src={`/images/benefit${index + 1}.png`} fill alt={benefit.title} className='object-cover object-center' />
              </div>
            </div>
{/* <div className="relative w-[400px] h-[500px] overflow-hidden">
  <Image
    src="/images/textbeforeyousend-2-clear.jpg"
    alt={benefit.title}
    fill
    className="object-cover object-center"
    priority
  />
</div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
