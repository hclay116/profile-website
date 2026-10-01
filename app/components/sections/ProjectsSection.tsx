import ProjectCard from '../cards/ProjectCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { projectsData } from '../../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader index="05" label="Projects" title="Projects" subtitle="AI, ML, and Full-Stack Development" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <Reveal key={index} delay={(index % 2) * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
