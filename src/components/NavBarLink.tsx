import { Link } from 'gatsby';
import React from 'react';

interface Props {
  to: string;
  children: React.ReactNode;
}

export default function NavBarLink({ to, children }: Props) {
  return (
    <Link className="flex items-center text-neutral-700 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-200" to={to}>
      {children}
    </Link>
  )
}
