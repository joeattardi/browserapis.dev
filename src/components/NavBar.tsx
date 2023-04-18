import React from 'react';
import { MdOutlineRestaurant, MdMenu, MdClose } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

import useNavigation from '../hooks/useNavigation';
import useSiteMetadata from '../hooks/useSiteMetadata';
import DarkModeToggle from './DarkModeToggle';
import Search from './Search';
import NavBarLink from './NavBarLink';
import NavBarItem from './NavBarItem';

export default function NavBar({ showTitle, theme, setTheme, isNavOpen, setNavOpen}) {
  const { title } = useSiteMetadata();
  const data = useNavigation('topnav');

  function toggleMenu() {
    setNavOpen(isNavOpen => !isNavOpen);
  }

  const MenuIcon = isNavOpen ? MdClose : MdMenu;

  return (
    <nav className="p-4 text-gray-50 flex items-center justify-between h-full">
      <button onClick={toggleMenu} className="mr-4 block md:hidden">
        <MenuIcon size={32} />
      </button>

      <NavBarLink to="/">
        <div className="hidden md:block w-12"><img src="/logo.svg" /></div>
        {showTitle && <div className="text-base ml-2 md:text-2xl">{title}</div>}
      </NavBarLink>

      <div className="mx-4 flex items-center justify-center space-x-1">
        {data.map(item => (
          <NavBarItem href={item.path} key={item.key}>
            {item.title}
          </NavBarItem>
        ))}
        
          <NavBarItem href="https://github.com/joeattardi/web-browser-api-cookbook" title="View code on GitHub" isExternal>
            <BsGithub size={24} />
          </NavBarItem>
          <DarkModeToggle theme={theme} setTheme={setTheme} isDark />

        <Search />
      </div>
    </nav>
  );
}
