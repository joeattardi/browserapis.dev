import React from 'react';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import SEO from '../components/Seo';

export default function NotFoundPage() {
  return (
    <ContentOnlyLayout>
      <div className="p-8 leading-relaxed text-xl max-w-2xl mx-auto">
        <img className="mx-auto w-1/2 md:w-1/3 mt-8" alt="Not found" src="/404.svg" />
        <h1 className="text-center text-4xl py-8 mb-2 font-serif">Oops! Not Found</h1>
        <p className="text-center">
          The page you requested could not be found.
        </p>
      </div>
    </ContentOnlyLayout>
  );
}

export const Head = (props) => <SEO {...props} pageTitle="Not Found" />;