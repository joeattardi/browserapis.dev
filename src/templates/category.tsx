import React from 'react';
import SidebarLayout from '../components/layouts/SidebarLayout';

export default function Category(props) {
  return (
    <SidebarLayout>
      <h1>{props.pageContext.frontmatter.title}</h1>
    </SidebarLayout>
  )
}
