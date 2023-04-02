import React from 'react';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import { header, logoIcon, homeLink, navList, navLink, navItem } from './Header.css';
import { Link } from 'gatsby';

const Header = () => {
  const data = useNavigation('topnav');

  return (
    <header className={header}>
      <Link className={homeLink} to="/">
        <MdOutlineRestaurant size={32} className={logoIcon} />
        Web Browser API Cookbook
      </Link>

      <nav>
        <ul className={navList}>
          {data.map(item => (
            <li className={navItem} key={item.key}>
              <Link className={navLink} to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};

export default Header;
