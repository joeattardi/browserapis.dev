import React from 'react';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import useCategories from '../hooks/useCategories';

export const frontmatter = {
  title: 'Chapters',
  slug: '/demos',
  nav: {
    key: 'demos',
    group: 'topnav',
    order: 1
  }
};

export default function DemosPage() {
  const data = useCategories();
  
  return (
    <ContentOnlyLayout>
      <PageTitle>Chapters</PageTitle>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {data.map(category => (
          <Card 
            chapter={category.frontmatter.order}
            key={category.frontmatter?.key} 
            title={category.frontmatter?.title} 
            href={category.frontmatter?.slug}
          >
            {category.frontmatter?.summary}
          </Card>
        ))}
      </div>
    </ContentOnlyLayout>
  );
}

export const Head = (props) => <SEO {...props} pageTitle="Chapters" />;