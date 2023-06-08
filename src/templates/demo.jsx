import React from 'react';
import clsx from 'clsx';
import 'react-loading-skeleton/dist/skeleton.css';

import SEO from '../components/Seo';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import InlineDemo from '../components/layouts/InlineDemo';
import CodeBlock from '../components/CodeBlock';
import CompatibilityNote from '../components/CompatibilityNote';
import PageTitle from '../components/PageTitle';
import SocialShare from '../components/SocialShare';
import useCategories from '../hooks/useCategories';
import { Link } from 'gatsby';

export default function Demo({ children, uri, pageContext }) {
  const categories = useCategories();
  const parent = categories.find(category => category.frontmatter?.key === pageContext.frontmatter.category);

  return (
    <ContentOnlyLayout>
      <div className="text-gray-700 dark:text-gray-200">
      {parent?.frontmatter?.slug && parent?.frontmatter?.title && 
        <Link className="mb-4 block text-xl underline text-blue-600" to={parent.frontmatter.slug}>
          Chapter {parent.frontmatter.order}: {parent.frontmatter.title}
        </Link>}
      <PageTitle>{pageContext.frontmatter.section} {pageContext.frontmatter.title}</PageTitle>
      {pageContext.frontmatter.compatibilityWarning && (
        <CompatibilityNote {...pageContext.frontmatter.compatibilityWarning} />
      )}

      <section className="prose prose-lg max-w-none dark:prose-invert">{children}</section>

      <section className="my-5">
        <h2 className="text-2xl my-2">Demo</h2>
        <div className={clsx('bg-white p-4 rounded-md shadow-lg my-2 recipeDemo')}>
            <InlineDemo code={pageContext.codeFiles} />
        </div>
      </section>

      <section className="my-5">
        <h2 className="text-2xl my-2">Code</h2>
        <div className="flex flex-col space-y-8">
        {pageContext.codeFiles.map(codeFile =>
          <CodeBlock 
            key={codeFile.name} 
            language={codeFile.language} 
            code={codeFile.code} 
            title={codeFile.title} 
          />
        )}
        </div>
      </section>
      </div>
      <SocialShare />
    </ContentOnlyLayout>
  )
}

export const Head = props => <SEO {...props} />;
