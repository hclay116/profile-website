interface ExperienceCardProps {
  company: string;
  location: string;
  title: string;
  duration: string;
  description: string[];
}

const ExperienceCard = ({ company, location, title, duration, description }: ExperienceCardProps) => {
  return (
    <div className="glass rounded-xl p-6 card-hover">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-bold text-text-primary">{company}</h4>
        <span className="text-secondary text-sm">{location}</span>
      </div>
      <p className="text-accent mb-2">{title}</p>
      <p className="text-text-secondary text-sm mb-3">{duration}</p>
      <ul className="text-text-secondary text-sm space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
