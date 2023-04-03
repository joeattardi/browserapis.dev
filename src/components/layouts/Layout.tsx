import React from 'react';
import clsx from 'clsx';

import '../../globalStyles.css';
import Header from '../Header';
import { layout, main } from './Layout.css';

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
}

export default function Layout({ className = '', children }: LayoutProps) {
  return (
    <div className={clsx(layout, className)}>
      <Header />
      {children}
    </div>
  ); 
}
