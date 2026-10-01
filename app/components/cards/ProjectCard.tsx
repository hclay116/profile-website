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
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="panel card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden bg-white">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider">
          <span className="text-teal">{type}</span>
          <span className="text-muted">{date}</span>
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center text-sm text-ink transition-colors group-hover:text-teal">
          View Project <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
