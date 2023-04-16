import React from 'react';

import ContentOnlyLayout from '../../components/layouts/ContentOnlyLayout';

export default function ConfirmedPage() {
  return (
    <ContentOnlyLayout>
        <div className="p-8 leading-relaxed text-xl max-w-2xl mx-auto">
          <img className="mx-auto w-1/2 md:w-1/3 mt-8" alt="Email sent" src="/mailSent.svg" />
          <h1 className="text-center text-4xl py-8 mb-2 font-serif">You're all set!</h1>
          <p>
            You are now subscribed to receive emails with updates about the book's progress.
            Thanks again for signing up!
          </p>
        </div>
    </ContentOnlyLayout>
  )
}