import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import '../../globalStyles.css';
import Header from '../Header';
import { layout } from './Layout.css';

import { lightTheme, darkTheme, mediaQueries } from '../../theme';

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
}

function getInitialTheme() {
  if (sessionStorage.getItem('theme')) {
    return sessionStorage.getItem('theme');
  }

  return window.matchMedia(mediaQueries.darkMode).matches ? darkTheme : lightTheme;
}

export default function Layout({ className = '', children }: LayoutProps) {
  useEffect(() => {
    const query = window.matchMedia(mediaQueries.darkMode);
    query.addEventListener('change', () => {
      if (!sessionStorage.theme) {
        setTheme(query.matches ? darkTheme : lightTheme);
      }
    });
  }, []);
  const [theme, setTheme] = useState(getInitialTheme());
  return (
    <div className={clsx(layout, theme, className)}>
      <Header theme={theme} setTheme={setTheme} />
      {children}
    </div>
  ); 
}
