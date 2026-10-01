interface ExperienceCardProps {
  company: string;
  location: string;
  title: string;
  duration: string;
  description: string[];
  tags?: string[];
}

const ExperienceCard = ({ company, location, title, duration, description, tags }: ExperienceCardProps) => {
  return (
    <div className="relative grid gap-2 pl-8 md:grid-cols-[180px_1fr] md:gap-8 md:pl-0">
      {/* timeline node */}
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-teal bg-void md:left-[186px]" />
      <div className="font-mono text-xs uppercase tracking-wider text-muted md:pt-1.5 md:text-right">
        {duration}
      </div>
      <div className="panel card-hover p-6 md:ml-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="font-display text-xl font-semibold text-ink">{company}</h4>
          <span className="text-xs text-muted">{location}</span>
        </div>
        <p className="mt-1 text-sm text-teal">{title}</p>
        {tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-violet/10 px-2.5 py-0.5 font-mono text-[11px] text-violet">
                {tag}
              </span>
            ))}
          </div>
        )}
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          {description.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal/70" />
              <span>{item.replace(/^•\s*/, '')}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
