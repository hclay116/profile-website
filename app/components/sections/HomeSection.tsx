'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import ProteinFold from '../ui/ProteinFold';

const HomeSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* Text Content */}
          <div className="animate-slide-up text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-line bg-surface/60 py-1 pl-1 pr-4 backdrop-blur">
              <Image
                src="/images/headshot.png"
                alt="Hannah's Headshot"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="flex items-center gap-2 font-mono text-xs text-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                AI Engineer @ Zingage
              </span>
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Hi. I&apos;m Hannah.
              <br />
              <span className="gradient-text">I build AI for medicine.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              I&apos;m an AI Engineer at Zingage and a Stanford Computer Science grad (BS Biomedical Computation, MS AI).
              I have experience in AI and full-stack engineering,
              but my passion lies in the intersection of AI and medicine.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button href="mailto:hclay116@gmail.com" variant="primary">
                Contact Me
              </Button>
              <Button href="/Clay_Resume.pdf" variant="outline" external>
                View Resume ↗
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-6 text-left">
              {[
                ['BS + MS', 'Stanford CS'],
                ['Bio + AI', 'Biomedical Computation · AI tracks'],
                ['7', 'industry & research roles'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-semibold text-ink">{value}</dt>
                  <dd className="mt-1 text-xs text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Protein folding visual */}
          <div className="animate-fade-in">
            <div className="panel relative mx-auto aspect-square w-full max-w-[540px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,140,255,0.16),transparent_65%)]" />
              {/* corner brackets */}
              {['left-3 top-3 border-l border-t', 'right-3 top-3 border-r border-t', 'bottom-3 left-3 border-b border-l', 'bottom-3 right-3 border-b border-r'].map((c) => (
                <span key={c} className={`absolute h-4 w-4 border-teal/50 ${c}`} />
              ))}
              <ProteinFold className="absolute inset-0" />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                <span>pLDDT</span>
                <span className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-plddt-high" />&gt;90</span>
                  <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-plddt-ok" />70–90</span>
                  <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-plddt-low" />50–70</span>
                  <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-plddt-vlow" />&lt;50</span>
                </span>
              </div>
              <span className="pointer-events-none absolute right-4 top-4 font-mono text-[10px] uppercase tracking-wider text-muted">
                drag to rotate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
