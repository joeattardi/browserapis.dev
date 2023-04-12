import React from 'react';
import clsx from 'clsx';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { header } from './Header.module.css';
import { Link } from 'gatsby';
import NavBar from './NavBar';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ theme, setTheme, isNavOpen, setNavOpen }) => {
  return (
    <header className={clsx('bg-gray-700', header)}>
      <NavBar theme={theme} setTheme={setTheme} isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </header>
  )
};

export default Header;
