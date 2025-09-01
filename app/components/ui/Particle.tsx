'use client';

import { useMemo } from 'react';

interface ParticleProps {
  delay: number;
  index: number;
}

const Particle = ({ delay, index }: ParticleProps) => {
  const position = useMemo(() => ({
    left: `${(index * 7) % 100}%`,
    top: `${(index * 11) % 100}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${6 + (index % 4)}s`
  }), [delay, index]);

  return (
    <div 
      className="particle absolute w-2 h-2 bg-primary opacity-20"
      style={position}
    />
  );
};

export default Particle;
