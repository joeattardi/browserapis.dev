import React from 'react';
import clsx from 'clsx';

export default function CallToAction({ onClick, children }) {
  return (
    <button 
      className={clsx(
        'bg-indigo-800 text-indigo-100',
        'rounded-md px-10 py-3 text-base'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
