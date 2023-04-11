import React from 'react';
import clsx from 'clsx';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import useSiteMetadata from '../hooks/useSiteMetadata';
// import { header } from './Header.module.scss';
import { Link } from 'gatsby';
import NavBar from './NavBar';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ theme, setTheme, isNavOpen, setNavOpen }) => {
  const data = useNavigation('topnav');
  const { title } = useSiteMetadata();

  return (
    <header className="bg-gray-700">
      <NavBar theme={theme} setTheme={setTheme} isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </header>
  )
};

export default Header;
