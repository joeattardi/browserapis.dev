import React from 'react';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import { header, logoIcon, homeLink, nav, navList, navLink, navItem } from './Header.css';
import { Link } from 'gatsby';
import NavMenu from './NavMenu';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ theme, setTheme }) => {
  const data = useNavigation('topnav');

  return (
    <header className={header}>
      <Link className={homeLink} to="/">
        <MdOutlineRestaurant size={32} className={logoIcon} />
        <span>Web Browser API Cookbook</span>
      </Link>

      <nav className={nav}>
        <ul className={navList}>
          {data.map(item => (
            <li className={navItem} key={item.key}>
              <Link className={navLink} to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <DarkModeToggle theme={theme} setTheme={setTheme} />
        <NavMenu />
      </nav>
    </header>
  )
};

export default Header;
