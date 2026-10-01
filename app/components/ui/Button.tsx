'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  external?: boolean;
}

const Button = ({ children, onClick, variant = 'primary', className = '', href, external }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300";

  const variantClasses = {
    primary: "bg-gradient-to-r from-teal to-plddt-ok text-void hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.6)] hover:brightness-110",
    secondary: "bg-surface-2 text-ink border border-line hover:border-teal/50",
    outline: "border border-line text-ink hover:border-teal/60 hover:text-teal"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
