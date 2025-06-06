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
 * @version 2.0.0
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
  video?: string;
}> = ({ title, type, date, description, image, technologies, link, video}) => {
  return (
    <div className="card card-side bg-white shadow-xl mb-4 overflow-hidden">
    <figure className="w-2/5 flex-shrink-0 overflow-hidden">
      {!video && <img
        src={image}
        alt={title} />}
      {video && <iframe
        src={video}
        title={title}
        width="640" 
        height="480" 
        allow="autoplay"
        allowFullScreen
      ></iframe>}
    </figure>
    <div className="card-body">
      <Link href={link}>
        <h2 className="card-title text-background hover:font-bold">{title}</h2>
      </Link>
      <div className='flex flex-row justify-between text-gray-500'>
        <p>{type}</p>
        <p>{date}</p>
      </div>
      
      {description.map((item, index) => (
        <p className="text-gray-600" key={index}>{item}</p>
      ))}
      <div className="card-actions justify-end">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="badge badge-lg badge-outline text-background"
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
      <h1 className="text-5xl font-bold mb-8">Projects</h1>
      <hr className="border-gray-600 mb-6" />
        <ProjectItem
          title="GridFlow"
          type="RL and CV"
          date="January-March 2025"
          link="https://github.com/hclay116/Gridflow"
          image="images/smart-traffic.png"
          technologies={[
            'Python',
            'PyTorch',
            'SUMO',
          ]}
          description={[
            'GridFlow is a smart traffic light system that optimizes traffic at a single intersection using reinforcement learning. The system employs YOLOv5 for real-time detection of vehicles and pedestrians. Q-learning and Deep Q-Network (DQN) algorithms dynamically adjust traffic light timings based on current conditions.'
          ]}
        />
        <ProjectItem
          title="CoST: Code Switching Translation Data Augmentation Method"
          type="NLP and ML"
          link="https://github.com/tracyywei/cs224n-codeswitch"
          image="images/CoST-logo.png"
          date="January-March 2025"
          technologies={[
            'Python',
            'PyTorch'
          ]}
          description={[
            'CoST is a data augmentation method for code-switching translation tasks. It uses a fine-tuned mT5 model to generate synthetic code-switched sentences. The approach leverages machine translation to enhance the diversity and quality of training data. In evaluation, it more than doubled the accuracy of CoSDA-generated text on the XNLI benchmark.'
          ]}
        />
        <ProjectItem
          title="AI-Powered H&E Visualization Tool"
          type="Full Stack Development"
          date="June-September 2024"
          image="images/he2-logo.png"
          link="\projects"
          video="https://drive.google.com/file/d/1tnsDf4bTY25vBjxlI5wX37EcpKyF0OMZ/preview"
          technologies={[
            'AWS',
            'Next.js',
            'Typescript'
          ]}
          description={[
            'Users upload H&E-stained histological images to be run thorugh a CV model which highlights potentially cancerous cells. The visualiation tool for the output includes zoom, scrolling, and a sliding window. It is deployed on AWS with a fully automated CI/CD pipeline, integrating services like Amplify, DynamoDB, S3, and SageMaker to manage hosting, the ML pipeline, and backend operations. ',
            '\nLast updated May 2025: the website is under construction by A*STAR in Singapore. '
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
            "Battledart is an interactive Battleship game using C on a Raspberry Pi. Players throw magnetic darts at a custom-built 8x8 sensor grid, which detects hits in real time and displays the game on a computer monitor. The project involved configuring hardware, soldering connections, and integrating software to link the physical board with the digital game interface. All graphics were created from scratch."
          ]}
        />
    </div>
  );
};

export default ProjectsPage;
