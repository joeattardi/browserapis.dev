import React from 'react';
import { MdOutlineRestaurant } from 'react-icons/md';
import { header, logoIcon } from './Layout.css';

const Header = () => {
  return (
    <header className={header}>
      <MdOutlineRestaurant size={32} className={logoIcon} />
      Web Browser API Cookbook
    </header>
  )
};

export default Header;
