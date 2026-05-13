import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type AppLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>;

export function AppLink({ href, className, children, ...rest }: AppLinkProps) {
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
