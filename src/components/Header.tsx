import React from 'react';
import clsx from 'clsx';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { header } from './Header.module.css';
import { Link } from 'gatsby';
import NavBar from './NavBar';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ theme, setTheme, isNavOpen, setNavOpen, showTitle = true }) => {
  return (
    <header className={
      clsx(
        'sticky top-0 h-[--header-height] z-10',
        'bg-sky-100 text-neutral-700',
        'dark:bg-sky-950 dark:text-sky-100',
        header
      )
    }>
      <NavBar showTitle={showTitle} theme={theme} setTheme={setTheme} isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </header>
  )
};

export default Header;
