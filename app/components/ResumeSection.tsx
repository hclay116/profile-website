import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';

const ResumeSection = () => {
  const educationData = [
    {
      institution: "Stanford University",
      location: "Stanford, CA",
      degrees: [
        "Bachelor of Science, CS (Biomedical Computation Track)",
        "Master of Science, CS (AI Track)"
      ],
      gpas: ["GPA: 3.91", "GPA: 3.828"],
      dates: ["June 2025", "June 2026"],
      details: [
        "Coursework: Mining Massive Datasets, AI: Principles and Techniques, NLP with Deep Learning"
      ]
    },
    {
      institution: "Columbus Academy",
      location: "Gahanna, OH",
      details: [
        "GPA: 4.13 Unweighted, 4.42 Weighted",
        "June 2021",
        "Cum Laude (2020, 2021)",
        "National AP Scholar (2020)",
        "National Chinese Honor Society (2020)"
      ]
    }
  ];

  const experienceData = [
    {
      company: "Bioinformatics Institute, A*STAR",
      location: "Singapore",
      title: "SIPGA Internship Awardee",
      duration: "June-September 2024",
      description: [
        "• Developed Next.js web app with tissue segmentation AI model",
        "• Integrated AWS services (Amplify, DynamoDB, S3, SageMaker)"
      ]
    },
    {
      company: "Dropbox",
      location: "Remote",
      title: "Software Engineer Intern",
      duration: "June-September 2023",
      description: [
        "• Implemented full-stack bulk actions for Dropbox Enterprise",
        "• Redesigned Enterprise Members page with TypeScript/React"
      ]
    },
    {
      company: "OXOS Medical",
      location: "Atlanta, GA",
      title: "Software Engineer Intern",
      duration: "June-August 2022",
      description: [
        "• Developed CV models for X-ray device using Python/TensorFlow",
        "• Managed complete ML pipeline from data to deployment"
      ]
    }
  ];

  const skillsData = {
    languages: ['Java', 'JavaScript', 'C', 'C++', 'Python', 'TypeScript'],
    tools: ['React.js', 'AWS', 'Next.js', 'Node.js', 'MySQL', 'Git', 'TensorFlow'],
    spoken: ['English (Native)', 'Mandarin Chinese (Intermediate)']
  };

  return (
    <section id="resume" className="min-h-screen py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Resume</h2>
          <p className="text-text-secondary text-lg">Experience & Education</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-primary mb-6">Education</h3>
            {educationData.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-primary mb-6">Experience</h3>
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-primary mb-8 text-center">Skills</h3>
          <div className="glass rounded-xl p-8">
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
