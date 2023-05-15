import React from 'react';
import Layout from './Layout';

import { contentOnly } from './Layout.module.css';

export default function ContentOnlyLayout({ children, pageTitle, showTitle = true }) {
  return (
    <Layout pageTitle={pageTitle} showTitle={showTitle} className={contentOnly}>
      {children}
    </Layout>
  )
}
