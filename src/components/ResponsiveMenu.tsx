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
          'motion-reduce:transition-none ease-in-out transition-transform w-screen top-0'
        )}
      >
        <div className="sticky flex items-center justify-between flex-wrap top-0 bg-sky-100 dark:bg-sky-950">
          <div className="flex items-center w-full justify-between mb-2 px-4">
            <DarkModeToggle
              theme={theme}
              setTheme={setTheme}
              isDark={theme === 'dark'}
            />
          </div>
        </div>
        <div className="p-4 flex flex-col text-2xl">
          <div className="my-4"><Search /></div>
          {data.map(item => (
              <Link
                className="hover:bg-slate-300 dark:bg-stone-700 dark:hover:bg-slate-700 px-4 py-2 rounded text-center text-2xl" 
                to={item.path} 
                key={item.key}
              >
                {item.title}
              </Link>
            ))}
          </div>
        {/* <div className="p-4"><CategorySidebarMenu /></div> */}
        {/* <DemosMenu /> */}
      </div>
  );
}
