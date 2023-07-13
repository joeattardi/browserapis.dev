import React from 'react';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import PageTitle from '../components/PageTitle';
import SEO from '../components/Seo';
import { Link, graphql } from 'gatsby';

export const frontmatter = {
  title: 'Examples',
  slug: '/topics',
  nav: {
    key: 'topics',
    group: 'topnav',
    order: 2
  }
};

export default function TopicsPage({ data }) {
  return (
    <ContentOnlyLayout>
      <PageTitle>Examples by Chapter</PageTitle>

      {data.categories.nodes.map((category) => (
        <div className="my-4" key={category.frontmatter.slug}>
          <h2 className="text-2xl font-bold my-2">
            <Link className="underline" to={category.frontmatter.slug}>
              Chapter {category.frontmatter.order}: {category.frontmatter.title}
            </Link>
          </h2>
          <ul className="list-disc ml-8">
            {data.demos.nodes
              .filter(
                (demo) => demo.frontmatter.category === category.frontmatter.key
              )
              .map((demo) => (
                <li key={demo.frontmatter.slug}>
                  <Link
                    className="underline text-sky-700 dark:text-sky-400 text-xl"
                    to={demo.frontmatter.slug}
                  >
                    {demo.frontmatter.section} {demo.frontmatter.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </ContentOnlyLayout>
  );
}

export const query = graphql`
  {
    categories: allMdx(
      filter: { frontmatter: { type: { eq: "category" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      nodes {
        frontmatter {
          title
          key
          slug
          order
        }
      }
    }

    demos: allMdx(
      filter: { frontmatter: { type: { in: ["demo", "listing"] } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      nodes {
        frontmatter {
          title
          category
          slug
          order
          section
        }
      }
    }
  }
`;

export const Head = (props) => <SEO {...props} pageTitle="Examples" />;
