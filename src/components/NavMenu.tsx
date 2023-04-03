import React, { useState } from 'react';
import clsx from 'clsx';
import { MdMenu, MdClose } from 'react-icons/md';
import useNavigation from '../hooks/useNavigation';
import { button, menu } from './NavMenu.css';
import DemosMenu from './DemosMenu';

export default function NavMenu({}) {
  const [isOpen, setOpen] = useState(false);
  const data = useNavigation('sidebar');

  function toggle() {
    setOpen(isOpen => !isOpen);
  }

  const Icon = isOpen ? MdClose : MdMenu;

  return (
    <>
      <button onClick={toggle} className={button}>
        <Icon size={32} />
      </button>
      <div className={clsx(menu, { open: isOpen })}>
        <DemosMenu />
      </div>
    </>
  )
}
