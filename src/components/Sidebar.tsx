import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import useNavigation from '../hooks/useNavigation';
import DemosMenu from './DemosMenu';
import { sidebar, navList, navGroup, navGroupItem, navItem, navLink, navLinkActive } from './Sidebar.css';

export default function Sidebar() {
  const data = useNavigation('sidebar');

  return (
    <aside className={sidebar}>
      <nav>
        <DemosMenu />
      </nav>
    </aside>
  );
}
