import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-success text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-success/30',
    secondary: 'bg-transparent text-white border border-white/50 hover:bg-white/10 hover:border-gold hover:text-gold',
    outline: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-midnight',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  };

  return (
    <button
      className={cn(
        'font-display font-semibold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
