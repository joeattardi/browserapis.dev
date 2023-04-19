import React from 'react';
import SidebarLayout from '../components/layouts/SidebarLayout';
import PageTitle from '../components/PageTitle';
import SEO from '../components/Seo';
import useNavigation from '../hooks/useNavigation';
import Card from '../components/Card';

export default function Category({ uri, pageContext }) {
  const nav = useNavigation('sidebar');
  const items = nav.find(group => group.key === pageContext.frontmatter.nav.key)?.children ?? [];

  return (
    <SidebarLayout path={uri}>
      <PageTitle>{pageContext.frontmatter.title}</PageTitle>
      <p>{pageContext.excerpt}</p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(demo => (
          <Card key={demo.key} title={demo.title} href={demo.path}>
            {demo.summary}
          </Card>
        ))}
      </div>
    </SidebarLayout>
  )
}

export const Head = props => <SEO {...props} />;