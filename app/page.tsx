/** 
 * @file page.tsx
 * 
 * @description This file contains the main page that imports and renders all sections.
 * 
 * @author Hannah Clay
 * 
 * @created 2024-08-11
 * 
 * @version 3.0.0
*/

'use client';

import HomeSection from './components/sections/HomeSection';
import ResumeSection from './components/sections/ResumeSection';
import ProjectsSection from './components/sections/ProjectsSection';

export default function Home() {
  return (
    <div className="relative">
      <HomeSection />
      <ResumeSection />
      <ProjectsSection />
    </div>
  );
}
