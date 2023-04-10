import React from 'react';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
export { default as Head } from '../components/Head';

export default function NotFoundPage() {
  return (
    <ContentOnlyLayout>
    <div className="container has-text-centered">
      <img alt="Not found" src="/404.svg" style={{ width: '35%' }} />
      
      <h1 className="title is-size-1">Oops! Not Found</h1>
      <h2 className="subtitle is-size-4">The page you requested could not be found.</h2>
    </div>
    </ContentOnlyLayout>
  );
}

