'use client';

import Particle from './Particle';

const AnimatedBackground = () => {
  return (
    <div className="particles">
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle key={i} delay={i * 0.3} index={i} />
      ))}
    </div>
  );
};

export default AnimatedBackground;
