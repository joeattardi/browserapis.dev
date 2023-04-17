import React from 'react';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';
import CategorySidebarMenu from './CategorySidebarMenu';

export default function Sidebar() {
  const data = useNavigation('sidebar');

  return (
    <div className={clsx(
      'p-4 hidden md:block',
      'bg-slate-200 dark:bg-gray-700',
      'dark:border-r-gray-600'
    )}
    >
      <CategorySidebarMenu />
    </div>
  );
}
