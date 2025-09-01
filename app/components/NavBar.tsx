/** 
 * @file NavBar.tsx
 * 
 * @description This module contains the component for the navigation header.
 * 
 * @author Hannah Clay
 * 
 * @created 2024-08-11
 * 
 * @version 1.0.0
*/

'use client';

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-card-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Links */}
        <div className="flex space-x-4">
          <Link href="https://github.com/hclay116" passHref className="group">
              <Image
                src="/images/github-mark.png"
                alt="GitHub"
                width={32}
                height={32}
                className="hover:opacity-75 transition-all duration-300 group-hover:scale-110 brightness-0"
              />
          </Link>
          <Link href="https://www.linkedin.com/in/hannahclay116" passHref className="group">
              <Image
                src="/images/in-logo.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="hover:opacity-75 transition-all duration-300 group-hover:scale-110 brightness-0"
              />
          </Link>
        </div>
            
        <div className="flex space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('resume')}
            className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
          >
            Resume
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar