import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';

import DarkModeToggle from './DarkModeToggle';
import Search from './Search';
import DemosMenu from './DemosMenu';
import NavBarLink from './NavBarLink';
import useNavigation from '../hooks/useNavigation';
import CategorySidebarMenu from './CategorySidebarMenu';

export default function ResponsiveMenu({ isNavOpen, theme, setTheme }) {
  const data = useNavigation('topnav');

  return (
      <div
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className={clsx(
          "block fixed md:hidden top-[--header-height] overflow-auto",
          isNavOpen ? 'translate-x-0' : '-translate-x-full',
          'bg-sky-100 dark:bg-sky-950',
          'motion-reduce:transition-none ease-in-out transition-transform w-screen absolute top-0'
        )}
      >
        <div className="sticky top-0 bg-sky-100 dark:bg-sky-950">
        <div className="flex justify-end items-center mb-4">
        {data.map(item => (
          <Link
            className="bg-stone-300 hover:bg-slate-300 dark:bg-stone-700 dark:hover:bg-slate-700 px-4 py-2 rounded" 
            to={item.path} 
            key={item.key}
          >
            {item.title}
          </Link>
        ))}
        </div>
        <div className="mb-2 flex items-center justify-end">
          <DarkModeToggle
            theme={theme}
            setTheme={setTheme}
            isDark={theme === 'dark'}
          />
          <Search />
        </div>
        </div>
        <div className="p-4"><CategorySidebarMenu /></div>
        {/* <DemosMenu /> */}
      </div>
  );
}
