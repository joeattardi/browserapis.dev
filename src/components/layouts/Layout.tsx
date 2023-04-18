import React, { createContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
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

export default function Layout({ className = '', pageTitle, showTitle = true, children, sidebar = null }: LayoutProps) {
  const [theme, setTheme] = useState(initialTheme);
  const [isNavOpen, setNavOpen] = useState(false);

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
      <div className="flex flex-col min-h-screen">
        <Header showTitle={showTitle} isNavOpen={isNavOpen} setNavOpen={setNavOpen} theme={theme} setTheme={setTheme} />
        <div className="flex flex-grow bg-zinc-50 text-zinc-800 dark:text-zinc-200 dark:bg-zinc-950">
          {sidebar}
          <main className="p-8 max-w-7xl mx-auto">{children}</main>
        </div>
        {/* <ResponsiveMenu isNavOpen={isNavOpen} theme={theme} setTheme={setTheme} /> */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  ); 
}
