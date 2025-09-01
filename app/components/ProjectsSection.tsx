import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "GridFlow",
      type: "RL and CV",
      date: "January-March 2025",
      link: "https://github.com/hclay116/Gridflow",
      image: "/images/smart-traffic.png",
      technologies: ['Python', 'PyTorch', 'SUMO'],
      description: "Smart traffic light system using reinforcement learning and YOLOv5 for real-time vehicle detection. Implements Q-learning and DQN algorithms for dynamic traffic optimization."
    },
    {
      title: "CoST: Code Switching Translation",
      type: "NLP and ML",
      link: "https://github.com/tracyywei/cs224n-codeswitch",
      image: "/images/CoST-logo.png",
      date: "January-March 2025",
      technologies: ['Python', 'PyTorch'],
      description: "Data augmentation method for code-switching translation using fine-tuned mT5 model. More than doubled accuracy on XNLI benchmark compared to CoSDA."
    },
    {
      title: "AI-Powered H&E Visualization Tool",
      type: "Full Stack Development",
      date: "June-September 2024",
      image: "/images/he2-logo.png",
      link: "https://drive.google.com/file/d/1tnsDf4bTY25vBjxlI5wX37EcpKyF0OMZ/view?usp=sharing",
      technologies: ['AWS', 'Next.js', 'TypeScript'],
      description: "Web application for H&E-stained histological image analysis with AI-powered cancer cell detection. Features zoom, scrolling, and sliding window visualization."
    },
    {
      title: "Battledart",
      type: "Integrated Systems",
      link: "https://github.com/hclay116/battledart",
      image: "/images/battledart-logo.png",
      date: "March 2022",
      technologies: ['C', 'Raspberry Pi'],
      description: "Interactive Battleship game using magnetic darts on 8x8 sensor grid. Real-time hit detection with custom graphics and hardware integration."
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-text-secondary text-lg">AI, ML, and Full-Stack Development</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
