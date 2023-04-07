import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';
import { navList, navGroup, navGroupItem, navItem, navLink, navLinkActive } from './Sidebar.css';
import { sidebar } from './Sidebar.module.scss';

export default function Sidebar() {
  const data = useNavigation('sidebar');

  return (
    <div className={clsx(sidebar, 'p-2')}>
      <DemosMenu />
    </div>
  );
}
