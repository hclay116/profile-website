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

import HomeSection from './components/HomeSection';
import ResumeSection from './components/ResumeSection';
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  return (
    <div className="relative">
      <HomeSection />
      <ResumeSection />
      <ProjectsSection />
    </div>
  );
}
