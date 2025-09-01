interface EducationCardProps {
  institution: string;
  location: string;
  details: string[];
  degrees?: string[];
  gpas?: string[];
  dates?: string[];
}

const EducationCard = ({ institution, location, details, degrees, gpas, dates }: EducationCardProps) => {
  return (
    <div className="glass rounded-xl p-6 card-hover">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-bold text-text-primary">{institution}</h4>
        <span className="text-secondary text-sm">{location}</span>
      </div>
      <div className="space-y-2 text-text-secondary">
        {degrees ? (
          degrees.map((degree, index) => (
            <div key={index} className="flex justify-between">
              <p>{degree}</p>
              <p className="text-sm">{gpas?.[index] && `${gpas[index]} | `}{dates?.[index]}</p>
            </div>
          ))
        ) : (
          <div className="flex justify-between">
            <p>{details[0]}</p>
            <p className="text-sm">{details[1]}</p>
          </div>
        )}
        {details.slice(degrees ? 0 : 2).map((detail, index) => (
          <p key={index} className="text-sm">{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
