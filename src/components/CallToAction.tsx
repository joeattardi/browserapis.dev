import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function CallToAction({ onClick, children }: Props) {
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
