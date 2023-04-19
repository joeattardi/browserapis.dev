import React from 'react';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';
import CategorySidebarMenu from './CategorySidebarMenu';

export default function Sidebar({ path }) {
  const data = useNavigation('sidebar');

  return (
    <div className="bg-sky-100 dark:bg-sky-950">
      <div className={clsx(
        'p-4 hidden md:block min-w-[20rem] sticky top-[--header-height]',
      )}
      >
        <CategorySidebarMenu path={path} />
      </div>
    </div>
  );
}
