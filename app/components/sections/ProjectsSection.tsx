import ProjectCard from '../cards/ProjectCard';
import { projectsData } from '../../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-text-secondary text-lg">AI, ML, and Full-Stack Development</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
