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
      className="p-2 m-1 block rounded text-gray-700 hover:bg-slate-200"
      activeStyle={{ background: '#0284c7', color: '#ffffff' }}
    >
      {children}
    </Link>
  );
}
