import React from 'react';
import clsx from 'clsx';
import Layout from './Layout';
import Sidebar from '../Sidebar';

import { content } from './Layout.module.css';
import Footer from '../Footer';

type LayoutProps = {
  path: string;
  children: React.ReactNode;
};

export default function SidebarLayout({ path, children }: LayoutProps) {
  return (
    <Layout sidebar={<Sidebar path={path} />}>
      {children}
    </Layout>
  );
}
