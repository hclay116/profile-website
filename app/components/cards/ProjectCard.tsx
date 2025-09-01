import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  type: string;
  date: string;
  link: string;
  image: string;
  technologies: string[];
  description: string;
}

const ProjectCard = ({ title, type, date, link, image, technologies, description }: ProjectCardProps) => {
  return (
    <div className="glass rounded-xl overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
          <span className="text-secondary text-sm">{type}</span>
        </div>
        <p className="text-text-secondary text-sm mb-4">{date}</p>
        <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
