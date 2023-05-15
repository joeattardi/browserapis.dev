import { Link } from 'gatsby';
import React from 'react';

export default function NavBarLink({ to, children }) {
  return (
    <Link className="flex items-center text-neutral-700 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-200" to={to}>
      {children}
    </Link>
  )
}
