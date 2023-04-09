import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';
import { sidebar } from './Sidebar.module.scss';

export default function Sidebar() {
  const data = useNavigation('sidebar');

  return (
    <div className={clsx(sidebar)}>
      <DemosMenu />
    </div>
  );
}
