"use client";

import React from "react";

const SocialProof: React.FC = () => {
  const stats = [
    { label: "Messages Analyzed", value: "4K+" },
    { label: "Happy Users", value: "2K+" },
    // { label: 'Downloads', value: '1K+' }
  ];

  return (
    <div className="social-proof">
      <div className="social-proof-content">
        <p className="social-proof-label">
          Trusted by users who think before they send
        </p>
        <div className="logo-strip">
          {stats.map((stat, index) => (
            <div key={index} className="logo-item">
              <div
                style={{
                  fontSize: "24px",
                  paddingLeft: "8px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  color: "rgba(255, 255, 255, 0.75)",
                  marginTop: "2px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
