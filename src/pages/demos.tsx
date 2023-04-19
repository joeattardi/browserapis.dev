import React from 'react';

import useNavigation from '../hooks/useNavigation';
import SidebarLayout from '../components/layouts/SidebarLayout';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

export const frontmatter = {
  title: 'Demos',
  slug: '/demos',
  nav: {
    key: 'demos',
    group: 'topnav',
    order: 1
  }
};

export default function DemosPage({ path }) {
  const data = useNavigation('sidebar');
  return (
    <SidebarLayout path={path}>
      <PageTitle>Code &amp; Demos</PageTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(category => (
          <Card key={category.key} title={category.title} href={category.path}>
            {category.excerpt}
          </Card>
        ))}
      </div>
    </SidebarLayout>
  );
}

export const Head = () => <SEO pageTitle="Demos" />;