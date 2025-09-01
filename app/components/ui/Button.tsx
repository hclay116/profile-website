'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
}

const Button = ({ children, onClick, variant = 'primary', className = '', href }: ButtonProps) => {
  const baseClasses = "px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-focus",
    secondary: "bg-secondary text-white hover:bg-secondary-focus",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
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
