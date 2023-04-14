import React from 'react';
import { MdOutlineRestaurant, MdMenu, MdClose } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

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

  const MenuIcon = isNavOpen ? MdClose : MdMenu;

  return (
    <nav className="p-4 text-gray-200 flex items-center">
      <button onClick={toggleMenu} className="mr-4 block md:hidden">
        <MenuIcon size={32} />
      </button>

      <NavBarLink to="/">
        <MdOutlineRestaurant size={24} />
        <div className="ml-2">{title}</div>
      </NavBarLink>

      <div className="hidden md:flex flex-grow justify-end">
        {data.map(item => (
          <NavBarLink to={item.path} key={item.key}>
            {item.title}
          </NavBarLink>
        ))}
        <div className="mx-4 flex items-center justify-center space-x-3">
          <a href="https://github.com/joeattardi/web-browser-api-cookbook" target="_blank">
            <BsGithub title="View code on GitHub" size={24} />
          </a>
          <DarkModeToggle theme={theme} setTheme={setTheme} isDark />
        </div>
        <Search />
      </div>
    </nav>
  );
}
