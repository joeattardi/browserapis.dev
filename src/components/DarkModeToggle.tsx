import React from 'react';
import clsx from 'clsx';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { toggle } from './DarkModeToggle.module.scss';

const icons = {
  light: MdOutlineDarkMode,
  dark: MdOutlineLightMode
};

const labels = {
  light: 'Switch to dark theme',
  dark: 'Switch to light theme'
};

export default function DarkModeToggle({ theme, setTheme, isDark }) {
  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
  }

  const Icon = icons[theme];

  return (
      <button title={labels[theme]} className={clsx(toggle, 'button', isDark ? 'is-dark' : 'is-light')} onClick={toggleTheme}>
        <Icon size={24} />
      </button>
  );
}
