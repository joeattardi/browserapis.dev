import React from 'react';
import clsx from 'clsx';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

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
    <div className="navbar-item">
      <button title={labels[theme]} className={clsx('button is-dark')} onClick={toggleTheme}>
        <Icon size={24} />
      </button>
    </div>
  );
}
