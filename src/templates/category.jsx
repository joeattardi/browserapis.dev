import React from 'react';
import { graphql } from 'gatsby';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import PageTitle from '../components/PageTitle';
import SEO from '../components/Seo';
import Card from '../components/Card';

export default function Category({ data, uri, pageContext }) {
  return (
    <ContentOnlyLayout>
      <PageTitle>Chapter {pageContext.frontmatter.order}: {pageContext.frontmatter.title}</PageTitle>
      <p>{pageContext.excerpt}</p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {data.allMdx.nodes.map(demo => (
          <Card 
            key={demo.frontmatter.slug} 
            title={`${demo.frontmatter.section} ${demo.frontmatter.title}`} 
            href={demo.frontmatter.slug}
          >
            {demo.frontmatter.summary}
          </Card>
        ))}
      </div>
    </ContentOnlyLayout>
  )
}

export const Head = props => <SEO {...props} />;

export const query = graphql`
query ($key: String) {
  allMdx(filter: {frontmatter: {category: { eq: $key}} }, sort: { frontmatter:{order: ASC}}) {
    nodes {
      excerpt
      body
      frontmatter {
        summary
        slug
        title
        order
        section
      }
    }
  }
}
`;
