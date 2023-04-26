import React from 'react';
import clsx from 'clsx';

export default function Card({ title, children, href }) {
  return (
    <a
      href={href}
      className={clsx(
        'rounded -skew-x-12 py-4 px-8 shadow transition-all text-left',
        'bg-gradient-to-b from-sky-200 to-indigo-200',
        'hover:from-sky-300 hover:to-indigo-300',
        'hover:scale-105',
        'dark:from-sky-700 dark:to-indigo-700',
        'dark:hover:from-sky-600 dark:hover:to-indigo-600'
        // 'bg-blue-100 hover:bg-blue-200',
        // 'dark:bg-blue-900 dark:hover:bg-blue-800 dark:hover:text-white'
      )}
    >
      <div className="skew-x-12 flex items-start space-x-4">
        <div>
          <div className="font-bold dark:text-slate-200 text-slate-700 text-2xl mb-2">
            {title}
          </div>
          <p className="text-lg">{children}</p>
        </div>
      </div>
    </a>
  );
}
