import React, { useState } from 'react';
import clsx from 'clsx';
import { MdMenu, MdClose } from 'react-icons/md';
import useNavigation from '../hooks/useNavigation';
// import { button, menu } from './NavMenu.css';
import { menu, open } from './NavMenu.module.scss';

import DemosMenu from './DemosMenu';

export default function NavMenu({}) {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(isOpen => !isOpen);
  }

  return (
    <>
      <button
        onClick={toggle} 
        className={clsx('navbar-burger', isOpen && 'is-active')} 
        aria-expanded={isOpen}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

    </>
  )
}
