import { Link } from 'gatsby';
import React from 'react';

interface Props {
  to: string;
  children: React.ReactNode;
}

export default function NavBarLink({ to, children }: Props) {
  return (
    <Link className="flex items-center text-gray-200 hover:text-white" to={to}>
      {children}
    </Link>
  )
}
