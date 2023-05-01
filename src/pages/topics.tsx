import React from 'react';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import PageTitle from '../components/PageTitle';
import SEO, { SeoProps } from '../components/Seo';
import { Link, graphql } from 'gatsby';

export const frontmatter = {
  title: 'Topics',
  slug: '/topics',
  nav: {
    key: 'topics',
    group: 'topnav',
    order: 2,
  },
};

type Category = {
  frontmatter: {
    slug: string;
    title: string;
    key: string;
    nav: {
      key: string;
    };
  };
};

type Demo = {
  frontmatter: {
    category: string;
    key: string;
    slug: string;
    title: string;
    nav: {
      key: string;
    }
  };
};

type Props = {
  data: {
    categories: {
      nodes: Category[];
    };

    demos: {
      nodes: Demo[];
    };
  };
};

export default function TopicsPage({ data }: Props) {
  return (
    <ContentOnlyLayout>
      <PageTitle>Demos by Topic</PageTitle>

      {data.categories.nodes.map((category) => (
        <div className="my-4" key={category.frontmatter.nav.key}>
          <h2 className="text-2xl font-bold my-2">
            <Link className="underline" to={category.frontmatter.slug}>
              {category.frontmatter.title}
            </Link>
          </h2>
          <ul className="list-disc ml-8">
            {data.demos.nodes
              .filter(
                (demo) => demo.frontmatter.category === category.frontmatter.key
              )
              .map((demo) => (
                <li key={demo.frontmatter.nav.key}>
                  <Link
                    className="underline text-sky-700 dark:text-sky-400 text-xl"
                    to={demo.frontmatter.slug}
                  >
                    {demo.frontmatter.title}
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
      sort: { frontmatter: { nav: { order: ASC } } }
    ) {
      nodes {
        frontmatter {
          title
          key
          slug
          nav {
            key
            summary
            parent
            group
            order
          }
        }
      }
    }

    demos: allMdx(
      filter: { frontmatter: { type: { eq: "demo" } } }
      sort: { frontmatter: { nav: { order: ASC } } }
    ) {
      nodes {
        frontmatter {
          title
          category
          slug
          nav {
            key
            summary
            parent
            group
            order
          }
        }
      }
    }
  }
`;

export const Head = (props: SeoProps) => <SEO {...props} pageTitle="Topics" />;
