import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import useSiteMetadata from '../hooks/useSiteMetadata';
import DarkModeToggle from './DarkModeToggle';
import Search from './Search';
import { navBar } from './NavBar.module.scss';
import NavBarLink from './NavBarLink';

export default function NavBar({ theme, setTheme, isNavOpen, setNavOpen}) {
  const { title } = useSiteMetadata();
  const data = useNavigation('topnav');

  function toggleMenu() {
    setNavOpen(isNavOpen => !isNavOpen);
  }

  // TODO hamburger
  // TODO search
  // TODO dark mode

  return (
    <nav className="p-4 text-gray-200 flex items-center">
      <NavBarLink to="/">
        <MdOutlineRestaurant size={24} />
        <div className="ml-2">{title}</div>
      </NavBarLink>

      <div className="flex-grow flex justify-end">
        {data.map(item => (
          <NavBarLink to={item.path} key={item.key}>
            {item.title}
          </NavBarLink>
        ))}
      </div>
    </nav>
  );

  // return (
  //   <nav className={clsx('navbar is-dark is-flex-grow-1', navBar)} role="navigation" aria-label="main navigation">
  //     <div className="navbar-brand">
  //       <Link className="navbar-item" to="/">
  //         <MdOutlineRestaurant size={24} className="mr-2" />
  //         <span>{title}</span>
  //       </Link>
  //       <button
  //         onClick={toggleMenu} 
  //         className={clsx('navbar-burger', isNavOpen && 'is-active')} 
  //         aria-expanded={isNavOpen}
  //       >
  //         <span aria-hidden="true"></span>
  //         <span aria-hidden="true"></span>
  //         <span aria-hidden="true"></span>
  //       </button>
  //     </div>
  //     <div className="navbar-menu">
  //       <div className="navbar-start">
  //         {data.map(item => (
  //           <Link className="navbar-item" to={item.path} key={item.key}>
  //             {item.title}
  //           </Link>
  //         ))}
  //       </div>
  //       <div className="navbar-end is-align-items-center">
  //         {/* <Search /> */}
  //         <DarkModeToggle theme={theme} setTheme={setTheme} isDark />
  //       </div>
  //     </div>
  //   </nav>
  // )
}
