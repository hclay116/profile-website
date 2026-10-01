export const educationData = [
  {
    institution: "Stanford University",
    location: "Stanford, CA",
    degrees: [
      "Master of Science, Computer Science (Artificial Intelligence Track)",
      "Bachelor of Science, Computer Science (Computational Biology Track)"
    ],
    dates: ["June 2026", "June 2025"],
    details: [
      "Bio/Health Coursework: Representations & Algorithms for Computational Molecular Biology, Foundations of Computational Human Genomics, Modeling Biomedical Systems, Biodesign Fundamentals, Large-Scale Neural Network Modeling for Neuroscience, Biochemistry & Molecular Biology, Genetics, Cell Biology, Physiology, Introduction to Bioengineering, Human Anatomy, Foundations of Bioethics",
      "AI/ML Coursework: Mining Massive Datasets, AI: Principles and Techniques, NLP with Deep Learning, Deep Learning for Computer Vision, Reinforcement Learning, Deep Reinforcement Learning, Decision Making Under Uncertainty, Conversational Virtual Assistants with Deep Learning, Continuous Mathematical Methods with an Emphasis on Machine Learning"
    ]
  }
];

export const experienceData: Array<{
  company: string;
  location: string;
  title: string;
  duration: string;
  description: string[];
  tags?: string[];
}> = [
  {
    company: "Zingage",
    tags: ["Healthcare AI", "Voice Agents"],
    location: "New York, NY",
    title: "AI Engineer",
    duration: "June 2026-Present",
    description: [
      "• Co-developing core product AI agents, including voice and ranking/recommendation systems for home care",
      "• Building an in-house audio evaluation set for voice AI agents",
      "• Owning the rollout of a new ranking/recommendation system, from design iterations and shadow runs to A/B testing and full rollout"
    ]
  },
  {
    company: "Stanford Language Data and Reasoning Lab",
    tags: ["Research", "Recommender Systems"],
    location: "Stanford, CA",
    title: "Graduate Research Assistant",
    duration: "October 2025-April 2026",
    description: [
      "• Built a recommendation system utilizing knowledge graphs",
      "• Developed advanced evaluation techniques for an AI retail assistant through LLM-simulated user dialogue"
    ]
  },
  {
    company: "Verkada",
    location: "San Mateo, CA",
    title: "Software Engineer Intern",
    duration: "June-September 2025",
    description: [
      "• Built a voice agent on the Alarms Response team that leverages realtime LLMs for speech-to-speech capabilities using twilio, temporal, golang and openai APIs",
      "• Created an automated workflow for Alarm License Certificate generation using Temporal"
    ]
  },
  {
    company: "Bioinformatics Institute, A*STAR",
    tags: ["Bioinformatics", "Digital Pathology"],
    location: "Singapore",
    title: "SIPGA Internship Awardee",
    duration: "June-September 2024",
    description: [
      "• Developed a Next.js web app from scratch integrating an H&E histopathology tissue segmentation AI model for cancer cell detection with a custom visualization tool",
      "• Integrated AWS services (Amplify, DynamoDB, S3, SageMaker) to manage hosting, the ML pipeline, and backend database operations"
    ]
  },
  {
    company: "Dropbox",
    location: "Remote",
    title: "Software Engineer Intern",
    duration: "June-September 2023",
    description: [
      "• Implemented a full-stack development project for Dropbox Enterprise, enhancing functionality by implementing bulk actions using TypeScript, React, and Python for the backend.",
      "• Contributed to the redesign and migration of Dropbox Enterprise Members page collaborating closely with the Design team and product manager"
    ]
  },
  {
    company: "Code in Place",
    location: "Stanford, CA",
    title: "Curriculum Designer",
    duration: "June-September 2023",
    description: [
      "• Co-authored an online course reader for Stanford's global, virtual computer science class from scratch, creating original and engaging content and examples to illustrate key concepts for students worldwide."
    ]
  },
  {
    company: "OXOS Medical",
    tags: ["Medical Devices", "Computer Vision"],
    location: "Atlanta, GA",
    title: "Software Engineer Intern",
    duration: "June-August 2022",
    description: [
      "• Developed multiple computer vision models for an X-ray device using Python and TensorFlow, including key point detection and image segmentation models",
      "• Managed the entire machine learning pipeline, from data collection and annotation to preprocessing, model construction, and research",
      "• Conducted extensive hyperparameter tuning to optimize model performance and ensure accurate results"
    ]
  }
];

export const skillsData = {
  languages: ['Python', 'C++', 'C', 'Java', 'TypeScript', 'JavaScript', 'Go'],
  tools: ['PyTorch', 'TensorFlow', 'AWS', 'Git', 'Temporal', 'React.js', 'Next.js', 'Node.js', 'MySQL', 'Twilio', 'OpenAI APIs', 'ElevenLabs', 'Claude', 'Codex', 'Cursor', 'Devin'],
  spoken: ['English (Native)', 'Mandarin Chinese (Intermediate)']
};
