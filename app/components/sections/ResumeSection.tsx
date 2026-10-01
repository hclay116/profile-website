import EducationCard from '../cards/EducationCard';
import ExperienceCard from '../cards/ExperienceCard';
import PublicationsSection from './PublicationsSection';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { educationData, experienceData, skillsData } from '../../data/resume';

const skillGroups = [
  { label: 'Programming Languages', items: skillsData.languages, dot: 'bg-teal' },
  { label: 'Tools & Frameworks', items: skillsData.tools, dot: 'bg-plddt-high' },
  { label: 'Languages', items: skillsData.spoken, dot: 'bg-violet' },
];

const ResumeSection = () => {
  return (
    <>
      <section id="experience" className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader
              index="02"
              label="Experience"
              title="Experience"
            />
          </Reveal>

          <div className="relative space-y-8">
            {/* timeline spine */}
            <div className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-teal via-plddt-high to-violet opacity-40 md:left-[191px]" />
            {experienceData.map((exp, index) => (
              <Reveal key={index}>
                <ExperienceCard {...exp} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PublicationsSection />

      <section id="resume" className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader index="04" label="Education & Skills" title="Education & Skills" />
          </Reveal>

          <div className="grid gap-6">
            {educationData.map((edu, index) => (
              <Reveal key={index} delay={index * 80}>
                <EducationCard {...edu} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="panel mt-6 grid gap-8 p-6 md:grid-cols-3 md:p-8">
              {skillGroups.map(({ label, items, dot }) => (
                <div key={label}>
                  <h4 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
                    <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                    {label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ResumeSection;
