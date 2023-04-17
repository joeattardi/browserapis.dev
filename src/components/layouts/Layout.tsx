import React, { createContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import { layout, footer } from './Layout.module.css';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import ResponsiveMenu from '../ResponsiveMenu';

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
}

export const ThemeContext = createContext();

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  if (window.sessionStorage?.getItem('theme')) {
    return sessionStorage.getItem('theme');
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
const initialTheme = getInitialTheme();

export default function Layout({ className = '', pageTitle, showTitle = true, children }: LayoutProps) {
  const [theme, setTheme] = useState(initialTheme);
  const [isNavOpen, setNavOpen] = useState(false);


  // TODO export Head from layout
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
        <html className={theme} />
      </Helmet>
      <div className={clsx(layout, theme, className)}>
        <Header showTitle={showTitle} isNavOpen={isNavOpen} setNavOpen={setNavOpen} theme={theme} setTheme={setTheme} />
        {children}
        <ResponsiveMenu isNavOpen={isNavOpen} theme={theme} setTheme={setTheme} />
      </div>
    </ThemeContext.Provider>
  ); 
}
