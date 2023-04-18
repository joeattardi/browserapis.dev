import React from 'react';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';
import CategorySidebarMenu from './CategorySidebarMenu';

export default function Sidebar() {
  const data = useNavigation('sidebar');

  return (
    <div className="bg-sky-100">
      <div className={clsx(
        'p-4 hidden md:block min-w-[20rem] sticky top-[--header-height]',
      )}
      >
        <CategorySidebarMenu />
      </div>
    </div>
  );
}
