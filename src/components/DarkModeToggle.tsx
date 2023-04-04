import React from 'react';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { lightTheme, darkTheme } from '../theme';
import { toggleButton } from './DarkModeToggle.css';

const Icons = {
  light: MdOutlineDarkMode,
  dark: MdOutlineLightMode
}

export default function DarkModeToggle({ theme, setTheme }) {
  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
  }

  const Icon = Icons[theme];

  return (
    <button className={toggleButton} onClick={toggleTheme}>
      <Icon size={24} />
    </button>
  );
}
