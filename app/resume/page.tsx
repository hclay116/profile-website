/**
 * @file resume/page.tsx
 *
 * @description This file contains the resume page including extracted components for the education
 *              and experience sections, and a download button.
 *
 * @author Hannah Clay
 *
 * @created 2024-08-11
 *
 * @version 1.0.0
 */

import React from "react";
import Link from "next/link";

// Section Component
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-100 mb-2">{title}</h2>
      <hr className="border-gray-600 mb-6" />
      <div className="">{children}</div>
    </section>
  );
};

// EducationItem Component
const EducationItem: React.FC<{
  institution: string;
  location: string;
  gpa: string | string[];
  graduationDate: string | string[];
  details: string[];
  degree?: string[];
}> = ({ institution, location, gpa, graduationDate, details, degree }) => {
  return (
    <div className="mb-4 bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between text-xl font-bold text-background">
        <h3>{institution}</h3>
        <h3>{location}</h3>
      </div>
      {degree ? (
        degree.map((level, index) => (
          <div className="flex justify-between text-gray-500">
            <p>
              {level} {gpa[index] !== "" && "|"} {gpa[index]}
            </p>
            <p className="italic">{graduationDate[index]}</p>
          </div>
        ))
      ) : (
        <div className="flex justify-between text-gray-500">
          <p>{gpa}</p>
          <p className="italic">{graduationDate}</p>
        </div>
      )}

      <div className="mt-2 space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

// ExperienceItem Component
const ExperienceItem: React.FC<{
  company: string;
  location: string;
  title: string;
  duration: string;
  description: string[];
}> = ({ company, title, duration, description, location }) => {
  return (
    <div className="mb-4 bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between text-xl font-bold text-background">
        <h3>{company}</h3>
        <h3>{location}</h3>
      </div>
      <div className="flex justify-between text-gray-500">
        <p>{title}</p>
        <p className="italic">{duration}</p>
      </div>
      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </ul>
    </div>
  );
};

const ResumePage = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-4 flex flex-row justify-between">
          <h1 className="text-5xl font-bold">Resume</h1>
          <Link
            className="btn btn-outline transition duration-300 hover:text-gray-700"
            href="/Clay_Resume.pdf"
            passHref
          >
            Download
          </Link>
        </div>
        <Section title="Education">
          <EducationItem
            institution="Stanford University"
            gpa={["GPA: 3.9", ""]}
            location="Stanford, CA"
            graduationDate={["June 2025", "June 2026"]}
            details={[
              "Coursework: Programming Abstractions, Computer Systems from the Ground Up, Operating Systems Principles, Mining Massive Datasets, Artificial Intelligence: Principles and Techniques, Intro to Computational Genomics",
            ]}
            degree={[
              "Bachelor of Science, CS (Biomedical Computation Track)",
              "Master of Science, CS (AI Track)",
            ]}
          />
          <EducationItem
            institution="Columbus Academy"
            gpa="GPA: 4.13 Unweighted, 4.42 Weighted"
            location="Gahanna, OH"
            graduationDate="June 2021"
            details={[
              "Cum Laude (2020, 2021)",
              "National AP Scholar (2020)",
              "National Chinese Honor Society (2020)",
            ]}
          />
        </Section>

        <Section title="Experience">
          <ExperienceItem
            company="Bioinformatics Institute, A*STAR"
            location="Singapore"
            title="SIPGA Internship Awardee"
            duration="June 2024-Present"
            description={[
              "Developed a Next.js web application from the ground up, integrating a tissue segmentation AI model with a custom visualization tool.",
              "Integrated the application with AWS services, including Amplify, DynamoDB, S3, and SageMaker, to manage hosting, the ML pipeline, and backend database operations."
            ]}
          />
          <ExperienceItem
            company="Black LaIR"
            location="Stanford, CA"
            title="Tutor"
            duration="January 2023-Present"
            description={[
              "Assist students with introductory CS coursework including assignments and conceptual understanding.",
            ]}
          />
          <ExperienceItem
            company="Dropbox"
            location="Remote"
            title="Software Engineer Intern"
            duration="June-September 2023"
            description={[
              "Implemented a full-stack development project for Dropbox Enterprise, enhancing functionality by implementing bulk actions using TypeScript, React, and Python for the backend.",
              "Contributed to the redesign and migration of Dropbox Enterprise Members page collaborating closely with the Design team and product manager."
            ]}
          />
          <ExperienceItem
            company="Code in Place"
            location="Stanford, CA"
            title="Curriculum Designer"
            duration="January-June 2023"
            description={[
              "Co-authored an online course reader for Stanford’s global, virtual computer science class from scratch, creating original and engaging content and examples to illustrate key concepts for students worldwide.",
            ]}
          />
          <ExperienceItem
            company="OXOS Medical"
            location="Atlanta, GA"
            title="Software Engineer Intern"
            duration="June-August 2022"
            description={[
              "Developed multiple computer vision models for an X-ray device using Python and TensorFlow, including key point detection and image segmentation models.",
              "Managed the entire machine learning pipeline, from data collection and annotation to preprocessing, model construction, and research.",
              "Conducted extensive hyperparameter tuning to optimize model performance and ensure accurate results."
            ]}
          />
        </Section>

        <Section title="Skills">
          <div className="list-disc list-inside text-gray-600 space-y-2 bg-white rounded-lg shadow-lg p-8 text-gray-300">
            <p>
              <b>Programming Languages:</b> Java, Javascript, C, C++, Python,
              TensorFlow, Typescript
            </p>
            <p>
              <b>Tools:</b> React.js, AWS, Next.js, Node.js, MySQL, Git
            </p>
            <p>
              <b>Languages:</b> English (native), Mandarin Chinese
              (intermediate)
            </p>
          </div>
        </Section>

        <hr className="border-gray-600 mb-6" />
        <section>
          <div className="text-center mb-4">
            <p>
              +1 614-307-9254 |{" "}
              <a href="mailto:hclay116@gmail.com" className="hover:underline">
                hclay116@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
