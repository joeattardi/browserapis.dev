import React from 'react';
import clsx from 'clsx';

export default function Card({ title, children, href }) {

  return (
    <a
      href={href}
      className={clsx(
        'rounded shadow-lg p-4 transition-colors',
        'bg-white hover:bg-slate-100',
        'dark:bg-slate-700 dark:hover:bg-slate-800'
      )}
    >
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 dark:text-gray-400 text-base">
        {children}
      </p>
    </a>
  );
}

