interface SectionHeaderProps {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}

const SectionHeader = ({ index, label, title, subtitle }: SectionHeaderProps) => (
  <div className="mb-12">
    <p className="eyebrow mb-3">
      <span className="text-muted">{index} /</span> {label}
    </p>
    <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h2>
    {subtitle && <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>}
  </div>
);

export default SectionHeader;
