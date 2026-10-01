/**
 * @file NavBar.tsx
 *
 * @description This module contains the component for the navigation header.
 *
 * @author Hannah Clay
 *
 * @created 2024-08-11
 *
 * @version 2.0.0
*/

'use client';

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 md:px-6 ${
          scrolled ? 'border-line bg-void/75 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('home')}
            className="font-mono text-sm text-ink transition-colors hover:text-teal"
          >
            hannah<span className="text-teal">.</span>clay
          </button>
          <span className="hidden h-4 w-px bg-line sm:block" />
          <Link href="https://github.com/hclay116" aria-label="GitHub" className="opacity-70 transition hover:opacity-100">
            <Image src="/images/github-mark.png" alt="GitHub" width={20} height={20} className="brightness-0 invert" />
          </Link>
          <Link href="https://www.linkedin.com/in/hannahclay116" aria-label="LinkedIn" className="opacity-70 transition hover:opacity-100">
            <Image src="/images/in-logo.png" alt="LinkedIn" width={18} height={18} className="brightness-0 invert" />
          </Link>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hidden rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink md:block"
            >
              {label}
            </button>
          ))}
          <a
            href="/Clay_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full border border-teal/40 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-teal transition hover:bg-teal hover:text-void"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
