import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';

import DarkModeToggle from './DarkModeToggle';
import Search from './Search';
import DemosMenu from './DemosMenu';
import NavBarLink from './NavBarLink';
import useNavigation from '../hooks/useNavigation';

export default function ResponsiveMenu({ isNavOpen, theme, setTheme }) {
  const data = useNavigation('topnav');

  return (
    <div className="hidden relative">
      <div
        className={clsx(
          isNavOpen ? 'translate-x-0' : '-translate-x-full',
          'motion-reduce:transition-none ease-in-out transition-transform w-screen h-full absolute top-0 p-4 text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-900'
        )}
      >
        <div className="flex">
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
        <div className="mb-2 flex items-center justify-between">
          <DarkModeToggle
            theme={theme}
            setTheme={setTheme}
            isDark={theme === 'dark'}
          />
          <Search />
        </div>
        <DemosMenu />
      </div>
    </div>
  );
}
