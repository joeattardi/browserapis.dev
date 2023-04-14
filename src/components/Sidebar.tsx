import React from 'react';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';

export default function Sidebar() {
  const data = useNavigation('sidebar');

  return (
    <div className={clsx(
      'p-4 hidden md:block',
      'bg-sky-50 dark:bg-gray-700',
      'border-r border-r-gray-300 dark:border-r-gray-600'
    )}
    >
      <DemosMenu />
    </div>
  );
}
