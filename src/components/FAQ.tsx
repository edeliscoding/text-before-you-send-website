'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How does Text Before You Send analyze my messages?',
      answer:
        'Our advanced AI engine powered by OpenAI analyzes your messages in real-time, evaluating tone, sentiment, and how your words might be perceived by the recipient. The analysis covers emotional impact, clarity, and potential misunderstandings before you send.'
    },
    {
      id: 'faq-2',
      question: 'Is my data private and secure?',
      answer:
        'Yes. Your privacy is paramount. We analyze messages securely using industry-standard encryption. We do not store your personal messages permanently—analysis is processed and cleared. Your message data is treated with the highest confidentiality.'
    },
    {
      id: 'faq-3',
      question: 'What\'s Dating Mode and why is it premium?',
      answer:
        'Dating Mode provides specialized AI analysis for dating conversations. It analyzes both incoming messages from matches and your replies, detecting interest levels, red flags, and suggesting optimal reply timing. This advanced feature requires more AI processing, so it\'s exclusively available to Premium subscribers.'
    },
    {
      id: 'faq-4',
      question: 'How many message analyses do I get?',
      answer:
        'Free users get 3 analyses per day. Premium subscribers get 50 analyses per day, giving you plenty of room to analyze multiple conversations. Voice-to-text transcriptions are also limited: 5/day free, 15/day for Premium.'
    },
    {
      id: 'faq-5',
      question: 'Can I cancel my Premium subscription?',
      answer:
        'Yes, absolutely. You can cancel your Premium subscription anytime directly through the app. Your free tier access continues after cancellation. We want you to stay because you love the app, not because you\'re locked in.'
    }
  ];

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-container">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${activeId === item.id ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
