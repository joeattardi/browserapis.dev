import React from 'react';

import Layout from './Layout';
import Sidebar from '../Sidebar';

import { layout } from './SidebarLayout.css';
import { content } from './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: LayoutProps) {
  return (
    <Layout className={layout}>
      <Sidebar />
      <article className={content}>{children}</article>
    </Layout>
  )
}
