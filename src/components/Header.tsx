import React from 'react';
import clsx from 'clsx';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { nav, navList, navLink, navItem } from './Header.css';
import { header, homeLink } from './Header.module.scss';
import { Link } from 'gatsby';
import NavMenu from './NavMenu';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ theme, setTheme }) => {
  const data = useNavigation('topnav');
  const { title } = useSiteMetadata();

  return (
    <header className={clsx(header, 'is-size-4 p-3')}>
      <Link className={homeLink} to="/">
        <MdOutlineRestaurant size={24} className="mr-2" />
        <span>{title}</span>
      </Link>

      <nav className={nav}>
        <ul className={navList}>
          {data.map(item => (
            <li className={navItem} key={item.key}>
              <Link className={navLink} to={item.path}>{item.title}</Link>
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
