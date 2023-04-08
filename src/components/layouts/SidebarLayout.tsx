import React from 'react';
import clsx from 'clsx';
import Layout from './Layout';
import Sidebar from '../Sidebar';

import { content } from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: LayoutProps) {
  return (
    <Layout>
      <Sidebar />
      <article className={content}>
        <div className="p-4 container is-widescreen">
        {children}
        </div>
      </article>
    </Layout>
  )
}
