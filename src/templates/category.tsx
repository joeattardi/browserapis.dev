import React from 'react';
import { graphql } from 'gatsby';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import PageTitle from '../components/PageTitle';
import SEO from '../components/Seo';
import Card from '../components/Card';

export default function Category({ data, uri, pageContext }) {
  return (
    <ContentOnlyLayout>
      <PageTitle>{pageContext.frontmatter.title}</PageTitle>
      <p>{pageContext.excerpt}</p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.allMdx.nodes.map(demo => (
          <Card key={demo.frontmatter.slug} title={demo.frontmatter.title} href={demo.frontmatter.slug}>
            {demo.frontmatter.summary}

            {/* <em className="block mt-4">{demo.excerpt}</em> */}
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
      frontmatter {
        summary
        slug
        title
      }
    }
  }
}
`;
