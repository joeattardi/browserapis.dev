import React from 'react';
import clsx from 'clsx';
import { MdOpenInNew } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import SEO from '../components/Seo';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import InlineDemo from '../components/layouts/InlineDemo';
import CodeBlock from '../components/CodeBlock';
import useCodeImport from '../hooks/useCodeImport';
import CompatibilityNote from '../components/CompatibilityNote';
import PageTitle from '../components/PageTitle';
import SocialShare from '../components/SocialShare';
import useCategories from '../hooks/useCategories';
import { Link } from 'gatsby';

export default function Demo({ children, uri, pageContext }) {
  const { code, isCodeLoaded } = useCodeImport(pageContext.frontmatter.slug, pageContext.frontmatter.code);

  const categories = useCategories();
  const parent = categories.find(category => category.frontmatter.key === pageContext.frontmatter.category);

  console.log(pageContext.codeFiles);

  return (
    <ContentOnlyLayout path={uri}>
      <div className="text-gray-700 dark:text-gray-200">
      <Link className="mb-4 block text-xl underline text-blue-600" to={parent?.frontmatter.slug}>{parent?.frontmatter.title}</Link>
      <PageTitle>{pageContext.frontmatter.title}</PageTitle>
      {pageContext.frontmatter.compatibilityWarning && (
        <CompatibilityNote {...pageContext.frontmatter.compatibilityWarning} />
      )}

      <section className="prose prose-lg max-w-none dark:prose-invert">{children}</section>

      <section className="my-5">
        <h2 className="text-2xl my-2">
          <a className="space-x-1 flex items-center" title="Open demo in full screen" href="./full" target="_blank"><span>Demo</span> <MdOpenInNew size={18} /></a>
        </h2>
        <div className={clsx('bg-white p-4 rounded-md shadow-lg my-2 recipeDemo')}>
          {isCodeLoaded ?
            <InlineDemo code={code} /> :
            <Skeleton width="100%" height="5em" />
          }
        </div>
      </section>

      <section className="my-5">
        <h2 className="text-2xl my-2">Code</h2>
        <div className="flex flex-col space-y-8">
        {pageContext.codeFiles.map(codeFile =>
          <CodeBlock 
            key={codeFile.name} 
            description={codeFile.description}
            isLoading={!isCodeLoaded} 
            language={codeFile.language} 
            code={codeFile.code} 
            title={codeFile.title} 
          />
        )}
        {/* <CodeBlock isLoading={!isCodeLoaded} code={code.js} language="javascript" />
        <CodeBlock isLoading={!isCodeLoaded} code={code.html} language="html" />
        <CodeBlock isLoading={!isCodeLoaded} code={code.css} language="css" /> */}
        </div>
      </section>
      </div>
      <SocialShare />
    </ContentOnlyLayout>
  )
}

export const Head = props => <SEO {...props} />;
