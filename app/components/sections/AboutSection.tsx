import Image from 'next/image';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { focusAreas } from '../../data/about';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            index="01"
            label="About"
            title={<>My experience, <span className="gradient-text">my passions</span></>}
          />
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <div className="relative mx-auto w-64 lg:w-full">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal/30 via-plddt-high/20 to-violet/30 blur-2xl" />
              <Image
                src="/images/headshot.png"
                alt="Hannah's Headshot"
                width={400}
                height={400}
                className="relative w-full rounded-3xl border border-line"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="max-w-3xl text-lg leading-relaxed text-muted">
                I studied Computer Science at Stanford on the <span className="text-ink">Biomedical Computation</span> track
                for my BS and the <span className="text-ink">Artificial Intelligence</span> track for my MS. I&apos;ve built
                computer vision models for an X-ray device, tissue segmentation tooling for digital pathology, and
                production LLM voice agents. I am building a career improving public health. These are my core areas
                of interest.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area, i) => (
                <Reveal key={area.title} delay={i * 80}>
                  <div className="panel card-hover h-full p-5">
                    <div className="mb-3 font-mono text-xs text-teal">{area.code}</div>
                    <h3 className="font-display text-lg font-semibold text-ink">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
