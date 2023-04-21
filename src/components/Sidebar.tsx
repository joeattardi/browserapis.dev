import React from 'react';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';
import CategorySidebarMenu from './CategorySidebarMenu';

export default function Sidebar({ path }) {
  const data = useNavigation('sidebar');

  return (
    <div className="bg-sky-100 dark:bg-sky-950 min-w-[20rem] sticky flex overflow-auto top-[--header-height]" style={{ height: 'calc(100vh - var(--header-height))' }}>
      <div className={clsx(
        'p-4 hidden md:block w-full h-full  relative',
      )}
      >
        <CategorySidebarMenu path={path} />
      </div>
    </div>
  );
}
