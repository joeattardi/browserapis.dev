import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';

interface Props {
  to: string;
  children: React.ReactNode;
}

export default function MenuLink({ to, children }: Props) {
  return (
    <Link 
      to={to} 
      className="text-lg p-4 md:p-2 md:text-base m-1 block rounded text-gray-700 hover:bg-slate-300 dark:text-gray-200 dark:hover:bg-slate-800"
      activeStyle={{ background: '#0284c7', color: '#ffffff' }}
    >
      {children}
    </Link>
  );
}
