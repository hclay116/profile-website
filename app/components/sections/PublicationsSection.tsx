import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { publicationsData } from '../../data/publications';

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader index="03" label="Publications" title="Publications" />
        </Reveal>

        <div className="space-y-4">
          {publicationsData.map((pub, index) => (
            <Reveal key={pub.link} delay={index * 60}>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="panel card-hover group block p-6"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider">
                  <span className="text-teal">{pub.venue}</span>
                  <span className="text-muted">{pub.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-teal md:text-xl">
                  {pub.title} <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {pub.authors.map((author, i) => (
                    <span key={author}>
                      {author === 'Hannah Clay' ? <span className="font-semibold text-ink">{author}</span> : author}
                      {i < pub.authors.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pub.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-violet/10 px-2.5 py-0.5 font-mono text-[11px] text-violet">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
