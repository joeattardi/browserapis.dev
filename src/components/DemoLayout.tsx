import React from 'react';

import SidebarLayout from './SidebarLayout';

type LayoutProps = {
  children: React.ReactNode;
}

const DemoLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  )
};

export default DemoLayout;