import React from 'react';
import clsx from 'clsx';

import DarkModeToggle from './DarkModeToggle';
import Search from './Search';
import DemosMenu from './DemosMenu';

export default function ResponsiveMenu({ isNavOpen, theme, setTheme }) {
  return (
    <div className="relative">
      <div
        className={clsx(
          isNavOpen ? 'translate-x-0' : '-translate-x-full',
          'motion-reduce:transition-none ease-in-out transition-transform w-screen h-full absolute top-0 p-4 bg-stone-100 dark:bg-stone-900'
        )}
      >
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
