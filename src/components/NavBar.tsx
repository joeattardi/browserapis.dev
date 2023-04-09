import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import useSiteMetadata from '../hooks/useSiteMetadata';
import DarkModeToggle from './DarkModeToggle';

export default function NavBar({ theme, setTheme, isNavOpen, setNavOpen}) {
  const { title } = useSiteMetadata();
  const data = useNavigation('topnav');

  function toggleMenu() {
    setNavOpen(isNavOpen => !isNavOpen);
  }

  return (
    <nav className="navbar is-dark is-flex-grow-1" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <MdOutlineRestaurant size={24} className="mr-2" />
          <span>{title}</span>
        </Link>
        <button
          onClick={toggleMenu} 
          className={clsx('navbar-burger', isNavOpen && 'is-active')} 
          aria-expanded={isNavOpen}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          {data.map(item => (
            <Link className="navbar-item" to={item.path} key={item.key}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <DarkModeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  )
}
