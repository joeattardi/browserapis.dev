import React from 'react';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { lightTheme, darkTheme } from '../theme';
import { toggleButton } from './DarkModeToggle.css';

const icons = {
  light: MdOutlineDarkMode,
  dark: MdOutlineLightMode
};

const labels = {
  light: 'Switch to dark theme',
  dark: 'Switch to light theme'
};

export default function DarkModeToggle({ theme, setTheme }) {
  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
  }

  const Icon = icons[theme];

  return (
    <button title={labels[theme]} className={toggleButton} onClick={toggleTheme}>
      <Icon size={24} />
    </button>
  );
}
