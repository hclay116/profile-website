/** 
 * @file projects/page.tsx
 * 
 * @description This file contains the code for the projects page including the project card
 *              component.
 * 
 * @author Hannah Clay
 * 
 * @created 2024-08-11
 * 
 * @version 1.0.0
*/

import React from 'react';
import Link from 'next/link';

// ProjectItem Component
const ProjectItem: React.FC<{ 
  title: string;
  image: string;
  type: string;
  date: string;
  link: string;
  description: string[];
  technologies: string[];
}> = ({ title, type, date, description, image, technologies, link}) => {
  return (
    <div className="card card-side bg-gray-800 shadow-xl mb-4 overflow-hidden">
    <figure className="w-2/5 flex-shrink-0 overflow-hidden">
      <img
        src={image}
        alt={title} />
    </figure>
    <div className="card-body">
      <Link href={link}>
        <h2 className="card-title hover:text-gray-300">{title}</h2>
      </Link>
      <div className='flex flex-row justify-between text-background'>
        <p>{type}</p>
        <p>{date}</p>
      </div>
      
      {description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <div className="card-actions justify-end">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="badge badge-lg badge-outline"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
  );
};

// ProjectsPage Component
const ProjectsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 text-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Projects</h1>
      <hr className="border-gray-600 mb-6" />
        <ProjectItem
          title="Letter Lecture"
          type="Full Stack Development"
          date="Coming Soon"
          link="\projects"
          image="images/letter-lecture.jpeg"
          technologies={[
            'Next.js',
            'Typescript',
            'Tailwind',
          ]}
          description={[
            'Think Audible for textbooks. This web application will be an audiobook web app geared towards those with learning and/or visual impairments.',
            'Currently developing with Next.js, Typescript, and Tailwind.',
            'Implementing secure payment processing with Stripe API.',
            'Backend architecture yet to be determined.'
          ]}
        />
        <ProjectItem
          title="Ignite Excellence Health Coaching Website"
          type="Full Stack Development"
          link="\projects"
          image="images/coming-soon.png"
          date="Coming Soon"
          technologies={[
            'Next.js',
            'Typescript',
            'Tailwind'
          ]}
          description={[
            'Health coaching company website for Ignite Excellence.',
            'Website built using Next.js, Typescript, and Tailwind.',
            'Deployment TBD.'
          ]}
        />
        <ProjectItem
          title="AI-Powered H&E Visualization Tool"
          type="Full Stack Development"
          date="June-September 2024"
          image="images/he2-logo.png"
          link="https://main.d35nwumcsaolbg.amplifyapp.com"
          technologies={[
            'AWS',
            'Next.js',
            'Typescript'
          ]}
          description={[
            'Web app developed during my internship with A*Star in Singapore.',
            'This app is a visualization tool for an integrated computer vision model.',
            'Built using Next.js and Typescript and deployed on AWS with a fully automated CI/CD pipeline.'
          ]}
        />
        <ProjectItem
          title="Battledart"
          type="Integrated Systems"
          link="https://github.com/hclay116/battledart"
          image="images/battledart-logo.png"
          date="March 2022"
          technologies={[
            'C',
            'Raspberry Pi',
          ]}
          description={[
            "Final project for Stanford's CS107E: Computer Systems from the Ground Up.",
            'A computer monitor displays a battleship game in real time as players throw magnetic darts at a board wired with sensors.',
            'Constructed using C on Raspberry Pi.',
            'Configured hardware for the gameboard (including soldering and wire configuration).'
          ]}
        />
    </div>
  );
};

export default ProjectsPage;
