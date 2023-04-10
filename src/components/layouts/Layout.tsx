import React, { createContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import { layout, menu, open, menuWrapper } from './Layout.module.scss';
import '../../styles/index.scss';
import DemosMenu from '../DemosMenu';

import { darkTheme } from '../../styles/darkTheme.module.scss';
import { lightTheme } from '../../styles/lightTheme.module.scss';
import DarkModeToggle from '../DarkModeToggle';

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
}

const ThemeClasses = {
  light: lightTheme,
  dark: darkTheme
};

export const ThemeContext = createContext();

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

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    query.addEventListener('change', () => {
      if (!sessionStorage.theme) {
        setTheme(query.matches ? 'dark' : 'light');
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <Helmet>
        <html className={ThemeClasses[theme]} />
      </Helmet>
      <div className={clsx(layout, ThemeClasses[theme], className)}>
        <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} theme={theme} setTheme={setTheme} />
        {children}
      </div>
      <div className={clsx(menu, 'px-2', { [open]: isNavOpen })}>
        <div>
          <DarkModeToggle theme={theme} setTheme={setTheme} />
        </div>
        <DemosMenu size="lg" />
      </div>
    </ThemeContext.Provider>
  ); 
}
