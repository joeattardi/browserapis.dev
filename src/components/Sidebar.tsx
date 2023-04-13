import React from 'react';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';

export default function Sidebar() {
  const data = useNavigation('sidebar');

  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-4">
      <DemosMenu />
    </div>
  );
}
