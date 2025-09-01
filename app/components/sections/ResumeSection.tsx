import EducationCard from '../cards/EducationCard';
import ExperienceCard from '../cards/ExperienceCard';
import { educationData, experienceData, skillsData } from '../../data/resume';

const ResumeSection = () => {
  return (
    <section id="resume" className="min-h-screen py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Resume</h2>
          <p className="text-text-secondary text-lg">Experience & Education</p>
        </div>

        {/* Education and Experience - Stacked for better balance */}
        <div className="space-y-16">
          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-semibold text-primary mb-8 text-center">Education</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {educationData.map((edu, index) => (
                <EducationCard key={index} {...edu} />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-semibold text-primary mb-8 text-center">Experience</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {experienceData.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-primary mb-8 text-center">Skills</h3>
          <div className="glass rounded-xl p-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skillsData.languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Tools & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {skillsData.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skillsData.spoken.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm border border-secondary/20">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
