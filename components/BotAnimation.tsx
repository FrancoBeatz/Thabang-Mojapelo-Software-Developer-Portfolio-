import React from 'react';

const BotAnimation: React.FC = () => {
  return (
    <div className="w-full h-64 flex items-center justify-center overflow-hidden relative">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Glow effect */}
        <circle cx="100" cy="100" r="80" fill="url(#glowGradient)" className="animate-pulse-slow opacity-20" />
        
        {/* Head */}
        <rect x="60" y="50" width="80" height="70" rx="15" fill="#1E1E1E" stroke="#4C8BFF" strokeWidth="2" />
        
        {/* Screen/Face */}
        <rect x="70" y="60" width="60" height="40" rx="5" fill="#0E0E0E" />
        
        {/* Eyes - Animated */}
        <circle cx="85" cy="80" r="5" fill="#4C8BFF">
          <animate attributeName="cy" values="80;82;80" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="80" r="5" fill="#4C8BFF">
          <animate attributeName="cy" values="80;82;80" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Mouth */}
        <path d="M 90 90 Q 100 95 110 90" stroke="#4C8BFF" strokeWidth="2" strokeLinecap="round" />

        {/* Antenna */}
        <line x1="100" y1="50" x2="100" y2="30" stroke="#8E44AD" strokeWidth="2" />
        <circle cx="100" cy="25" r="5" fill="#FF6B6B" className="animate-pulse" />

        {/* Body */}
        <path d="M 50 130 C 50 130, 60 180, 100 180 C 140 180, 150 130, 150 130" stroke="#8E44AD" strokeWidth="2" fill="none" strokeDasharray="5 5" />
        
        {/* Floating Binary Code */}
        <text x="20" y="50" fill="#4C8BFF" fontSize="10" opacity="0.5" fontFamily="monospace">
          <animate attributeName="y" values="50;40;50" dur="4s" repeatCount="indefinite" />
          101
        </text>
        <text x="160" y="90" fill="#8E44AD" fontSize="12" opacity="0.5" fontFamily="monospace">
          <animate attributeName="y" values="90;100;90" dur="5s" repeatCount="indefinite" />
          010
        </text>
        
        <defs>
          <radialGradient id="glowGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(80)">
            <stop stopColor="#4C8BFF" />
            <stop offset="1" stopColor="#1E1E1E" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <div className="absolute bottom-0 text-center w-full">
        <p className="text-xs text-gray-500 font-mono">Creativity Module: ONLINE</p>
      </div>
    </div>
  );
};

export default BotAnimation;
