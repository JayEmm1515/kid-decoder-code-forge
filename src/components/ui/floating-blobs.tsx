import React from 'react';

export const FloatingBlobs = () => {
  return (
    <>
      {/* Floating organic blob shapes */}
      <svg 
        className="fixed top-[6%] right-[6%] w-[360px] h-[360px] opacity-90 pointer-events-none z-0 floating-element" 
        viewBox="0 0 200 200" 
        aria-hidden="true"
        style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.35))' }}
      >
        <defs>
          <radialGradient id="blob-gradient-1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="hsl(var(--ecosystem-teal))" />
            <stop offset="100%" stopColor="hsl(var(--ecosystem-navy))" />
          </radialGradient>
        </defs>
        <path 
          d="M49.6,-71.2C61.8,-62.1,66.5,-45.1,73.1,-28.7C79.6,-12.3,88,3.5,85.9,17.6C83.8,31.7,71.2,44.2,57.8,55.2C44.3,66.2,30.2,75.6,14.3,81C-1.5,86.3,-19.2,87.6,-35.3,82.2C-51.4,76.7,-65.8,64.5,-73.1,49.3C-80.4,34.1,-80.6,16,-80.6,-0.1C-80.7,-16.2,-80.4,-32.4,-72.8,-44.9C-65.2,-57.5,-50.3,-66.5,-35.2,-74.8C-20.2,-83.2,-10.1,-90.8,3.6,-97C17.3,-103.1,34.7,-107.8,49.6,-71.2Z" 
          fill="url(#blob-gradient-1)"
        />
      </svg>

      <svg 
        className="fixed bottom-[2%] left-[4%] w-[360px] h-[360px] opacity-90 pointer-events-none z-0 floating-element" 
        viewBox="0 0 200 200" 
        aria-hidden="true"
        style={{ 
          filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.35))',
          animationDelay: '2s',
          animationDuration: '12s'
        }}
      >
        <defs>
          <linearGradient id="blob-gradient-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--ecosystem-purple))" />
            <stop offset="100%" stopColor="hsl(var(--ecosystem-coral))" />
          </linearGradient>
        </defs>
        <path 
          d="M39.7,-60.2C52.6,-53.8,65.6,-44.4,71,-31.7C76.5,-19.1,74.5,-3.2,68.8,10.3C63.1,23.8,53.6,34.8,43.1,46.8C32.6,58.8,21,71.8,6.8,77.2C-7.4,82.6,-24,80.4,-37.9,72.6C-51.7,64.8,-62.8,51.3,-71.1,36.4C-79.5,21.4,-85,5.1,-82.7,-10.1C-80.4,-25.2,-70.2,-39.1,-57.8,-47.9C-45.4,-56.8,-30.7,-60.6,-16.8,-65.9C-3,-71.2,10,-78.1,22.1,-76.6C34.1,-75.2,45.9,-65.3,39.7,-60.2Z" 
          fill="url(#blob-gradient-2)"
        />
      </svg>

      {/* Additional organic shapes */}
      <div className="organic-shape fixed top-[20%] right-[20%] w-24 h-24" />
      <div className="organic-shape fixed bottom-[30%] left-[15%] w-16 h-16" style={{ animationDelay: '4s' }} />
      <div className="organic-shape fixed top-[60%] right-[10%] w-20 h-20" style={{ animationDelay: '6s' }} />
    </>
  );
};