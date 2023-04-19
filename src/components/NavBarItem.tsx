import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';

interface Props {
  href?: string;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isExternal?: boolean;
  children: React.ReactNode;
}

export default function NavBarItem({ href, onClick, isExternal = false, title, children }: Props) {
  const className = clsx(
    'flex items-center p-2 rounded-md',
    'text-neutral-700 hover:bg-violet-200',
    'dark:text-slate-200 dark:hover:bg-slate-600'
  );

  if (href) {
    return isExternal ? 
      <a className={className} href={href} title={title}>{children}</a> :
      <Link className={className} to={href} title={title}>{children}</Link>;
  }

  if (onClick) {
    return <button className={className} onClick={onClick} title={title}>{children}</button>;
  }

  return null;
}
