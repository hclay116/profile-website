interface EducationCardProps {
  institution: string;
  location: string;
  details: string[];
  degrees?: string[];
  dates?: string[];
}

const EducationCard = ({ institution, location, details, degrees, dates }: EducationCardProps) => {
  return (
    <div className="panel card-hover h-full p-6">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-display text-xl font-semibold text-ink">{institution}</h4>
        <span className="text-xs text-muted">{location}</span>
      </div>
      <div className="space-y-3 text-sm text-muted">
        {degrees ? (
          degrees.map((degree, index) => (
            <div key={index} className="flex flex-wrap justify-between gap-x-4">
              <p className="text-ink/90">{degree}</p>
              <p className="font-mono text-xs text-teal">{dates?.[index]}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-wrap justify-between gap-x-4">
            <p className="text-ink/90">{details[0]}</p>
            <p className="font-mono text-xs text-teal">{details[1]}</p>
          </div>
        )}
        {details.slice(degrees ? 0 : 2).map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
