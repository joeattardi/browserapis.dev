import React from 'react';
import clsx from 'clsx';
import Layout from './Layout';
import Sidebar from '../Sidebar';

import { content } from './Layout.module.css';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function SidebarLayout({ children }: LayoutProps) {
  return (
    <Layout sidebar={<Sidebar />}>
      {children}
    </Layout>
  );
}
