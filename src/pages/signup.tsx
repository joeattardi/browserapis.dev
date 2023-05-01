import React from 'react';

import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import SignupForm from '../components/SignupForm';
import PageTitle from '../components/PageTitle';
import SEO, { SeoProps } from '../components/Seo';

export default function SignupPage() {
  return (
    <ContentOnlyLayout>
       <PageTitle>Newsletter Signup</PageTitle>
       <p>
        Sign up to receive email updates about the book's progress, and find out
        when it is available for early access!
      </p>
      <SignupForm />
    </ContentOnlyLayout>
  )
}

export const Head = (props: SeoProps) => <SEO {...props} pageTitle="Sign Up" />;