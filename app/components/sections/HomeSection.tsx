'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AnimatedBackground from '../ui/AnimatedBackground';
import Button from '../ui/Button';

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToResume = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-left ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h1 className="text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Hi. I'm Hannah.</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-secondary mb-6 font-light">
              Software Engineer
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed">
            I'm a coterm student at Stanford studying Computer Science. 
            I have experience in AI and full-stack engineering, 
            but my passion lies in the intersection of AI and medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                href="mailto:hclay116@gmail.com"
                variant="primary"
              >
                Contact Me
              </Button>
              <Button 
                variant="outline"
              >
                 <a href="/Clay_Resume.pdf" target="_blank" rel="noopener noreferrer">
                     View Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Headshot with morphing animation */}
          <div className={`flex-shrink-0 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
              <Image
                src="/images/headshot.png" 
                alt="Hannah's Headshot"
                width={400} 
                height={400} 
                className="relative rounded-full border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
