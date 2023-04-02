import React from 'react';

import Layout from './Layout';
import Sidebar from './Sidebar';

import { content } from './SidebarLayout.css';

type LayoutProps = {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: LayoutProps) {
  return (
    <Layout>
      <Sidebar />
      <article className={content}>{children}</article>
    </Layout>
  )
}
