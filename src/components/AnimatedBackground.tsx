import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <>
      <div className="animated-gradient">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>
      <div className="mesh-gradient" />
      <svg className="absolute top-0 left-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          </filter>
        </defs>
        <g filter="url(#goo)">
          {[...Array(5)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="50"
              fill={`rgba(255, ${Math.random() * 100 + 50}, ${Math.random() * 100 + 50}, 0.1)`}
            >
              <animate
                attributeName="cx"
                values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`}
                dur={`${Math.random() * 20 + 20}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`}
                dur={`${Math.random() * 20 + 20}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </>
  );
};
