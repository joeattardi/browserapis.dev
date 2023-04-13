import React from 'react';
import { MdOutlineRestaurant } from 'react-icons/md';

import useNavigation from '../hooks/useNavigation';
import useSiteMetadata from '../hooks/useSiteMetadata';
import DarkModeToggle from './DarkModeToggle';
import Search from './Search';
import NavBarLink from './NavBarLink';

export default function NavBar({ theme, setTheme, isNavOpen, setNavOpen}) {
  const { title } = useSiteMetadata();
  const data = useNavigation('topnav');

  function toggleMenu() {
    setNavOpen(isNavOpen => !isNavOpen);
  }

  // TODO hamburger

  return (
    <nav className="p-4 text-gray-200 flex items-center">
      <NavBarLink to="/">
        <MdOutlineRestaurant size={24} />
        <div className="hidden md:block ml-2">{title}</div>
      </NavBarLink>

      <div className="hidden md:flex flex-grow justify-end">
        {data.map(item => (
          <NavBarLink to={item.path} key={item.key}>
            {item.title}
          </NavBarLink>
        ))}
        <div className="mx-4"><DarkModeToggle theme={theme} setTheme={setTheme} isDark /></div>
        <Search />
      </div>
    </nav>
  );
}
