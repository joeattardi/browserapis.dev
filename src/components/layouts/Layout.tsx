import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

// import '../../styles/globalStyles.css';
import Header from '../Header';
import { layout } from './Layout.css';
import '../../pages/index.scss';

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
      <Header theme={theme} setTheme={setTheme} />
      {children}
    </div>
  ); 
}
