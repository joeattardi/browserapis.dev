import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

// import '../../styles/globalStyles.css';
import Header from '../Header';
import { layout } from './Layout.css';
import { menu, open, menuWrapper } from './Layout.module.scss';
import '../../styles/index.scss';

import DemosMenu from '../DemosMenu';

import { lightTheme, darkTheme, mediaQueries } from '../../theme';

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
}

const ThemeClasses = {
  dark: darkTheme,
  light: lightTheme
};

export default function Layout({ className = '', children }: LayoutProps) {
  const [theme, setTheme] = useState(getInitialTheme());
  const [isNavOpen, setNavOpen] = useState(false);

  function getInitialTheme() {
    if (typeof window === 'undefined') {
      return 'light';
    }

    if (window.sessionStorage?.getItem('theme')) {
      return sessionStorage.getItem('theme');
    }

    return window.matchMedia?.(mediaQueries.darkMode).matches ? 'dark' : 'light';
  }

  useEffect(() => {
    const query = window.matchMedia(mediaQueries.darkMode);
    query.addEventListener('change', () => {
      if (!sessionStorage.theme) {
        setTheme(query.matches ? 'dark' : 'light');
      }
    });
  }, []);

  return (
    <div className={clsx(layout, ThemeClasses[theme], className)}>
      <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} theme={theme} setTheme={setTheme} />
      <div className={menuWrapper}>
        <div className={clsx(menu, 'p-2', { [open]: isNavOpen })}>
          <DemosMenu size="lg" />
        </div>
        {children}
      </div>
    </div>
  ); 
}
