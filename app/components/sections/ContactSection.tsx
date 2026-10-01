import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

const ContactSection = () => {
  return (
    <section id="contact" className="pb-16 pt-24">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="panel relative overflow-hidden px-6 py-16 text-center md:px-16">
            {/* heartbeat trace */}
            <svg
              className="pointer-events-none absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 opacity-20"
              viewBox="0 0 600 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 50 H200 L215 50 L225 20 L240 85 L255 10 L270 60 L280 50 H600"
                fill="none"
                stroke="url(#ecg)"
                strokeWidth="2"
                strokeDasharray="600"
                className="animate-ecg"
              />
              <defs>
                <linearGradient id="ecg" x1="0" x2="1">
                  <stop offset="0" stopColor="#2dd4bf" />
                  <stop offset="1" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>

            <p className="eyebrow relative mb-4"><span className="text-muted">05 /</span> Contact</p>
            <h2 className="relative font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Let&apos;s build the future of <span className="gradient-text">medicine</span>.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              I&apos;m interested in roles in biotech, drug discovery, medical devices, and health AI.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="mailto:hclay116@gmail.com">hclay116@gmail.com</Button>
              <Button href="https://www.linkedin.com/in/hannahclay116" variant="outline" external>LinkedIn ↗</Button>
              <Button href="https://github.com/hclay116" variant="outline" external>GitHub ↗</Button>
            </div>
          </div>
        </Reveal>

        <footer className="mt-12 flex flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Hannah Clay</span>
          <span>built with Next.js · folding in real time</span>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
