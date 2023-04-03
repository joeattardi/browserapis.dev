import React from 'react';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { lightTheme, darkTheme } from '../theme';
import { button } from './DarkModeToggle.css';

const Icons = {
  [lightTheme]: MdOutlineDarkMode,
  [darkTheme]: MdOutlineLightMode
}

export default function DarkModeToggle({ theme, setTheme }) {
  function toggleTheme() {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
  }

  const Icon = Icons[theme];

  return (
    <button className={button} onClick={toggleTheme}>
      <Icon size={24} />
    </button>
  )
}
