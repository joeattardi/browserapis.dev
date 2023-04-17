import React from 'react';

import SEO from '../../components/Seo';
import ContentOnlyLayout from '../../components/layouts/ContentOnlyLayout';

export default function ConfirmedPage() {
  return (
    <ContentOnlyLayout>
        <div className="p-8 leading-relaxed text-xl max-w-2xl mx-auto">
          <div className="bg-sky-200 p-12 rounded-full mx-auto w-64 h-64 flex items-center shadow">
            <img className="" alt="Email sent" src="/mailSent.svg" />
          </div>
          <h1 className="text-center text-4xl py-8 mb-2 font-serif">You're all set!</h1>
          <p>
            You are now subscribed to receive emails with updates about the book's progress.
            Thanks again for signing up!
          </p>
        </div>
    </ContentOnlyLayout>
  )
}

export const Head = () => <SEO pageTitle="Subscribed" />;
