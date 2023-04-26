import React from 'react';

import useNavigation from '../hooks/useNavigation';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import useCategories from '../hooks/useCategories';

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
  const data = useCategories();

  return (
    <ContentOnlyLayout>
      <PageTitle>Code &amp; Demos</PageTitle>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(category => (
          <Card 
            key={category.frontmatter?.key} 
            title={category.frontmatter?.title} 
            href={category.frontmatter?.slug}
          >
            {category.excerpt}
          </Card>
        ))}
      </div>
    </ContentOnlyLayout>
  );
}

export const Head = (props) => <SEO {...props} pageTitle="Demos" />;