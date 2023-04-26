import React from 'react';
import clsx from 'clsx';

export default function Card({ title, children, href }) {
  return (
    <a
      href={href}
      className={clsx(
        'rounded -skew-x-12 py-4 px-8 border-4 border-transparent  transition-all duration-[500ms]',
        'bg-indigo-200 hover:bg-indigo-400 hover:text-white hover:border-indigo-800',
        'dark:bg-indigo-800 dark:hover:bg-indigo-700 hover:text-white dark:hover:border-indigo-300'
      )}
    >
      <div className="skew-x-12">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-base">{children}</p>
      </div>
    </a>
  );
}
