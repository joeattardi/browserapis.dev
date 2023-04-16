import React from 'react';

import ContentOnlyLayout from '../../components/layouts/ContentOnlyLayout';

export default function ConfirmPage() {
  return (
    <ContentOnlyLayout>
        <div className="p-8 leading-relaxed text-xl max-w-2xl mx-auto">
        <img className="mx-auto w-1/2 md:w-1/3 mt-8" alt="Email inbox" src="/inbox.svg" />
          <h1 className="text-center text-4xl py-8 mb-2 font-serif">Thanks for signing up!</h1>
          <p>
            Please check your inbox for a confirmation email. You won't receive any further
            emails until you click the link in the email. If you don't receive the email after
            a few minutes, make sure to check your spam folder and add {' '}
            <strong>hello@BrowserAPIs.dev</strong> to your contacts.
          </p>
        </div>
    </ContentOnlyLayout>
  )
}