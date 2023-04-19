import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import SignupForm from '../components/SignupForm';
import SEO from '../components/Seo';
import SidebarLayout from '../components/layouts/SidebarLayout';

export default function HomePage() {
  const { title, subtitle } = useSiteMetadata();

  return (
    <ContentOnlyLayout showTitle={false}>
      <section className="text-center">
        <div>
          <h1 className="font-serif text-4xl md:text-6xl mb-2">
            {title}
          </h1>
          <img className="mx-auto w-2/3 max-w-md my-8" alt="Web browser with code" src="/browser_icon_3.svg" />
          <h2 className="font-serif text-2xl md:text-3xl">
            {subtitle}
          </h2>
        </div>
      </section>

      <div className="leading-relaxed text-lg p-4 mx-auto">
        <p className="my-2">
          Welcome to the companion website for the upcoming book{' '}
          <em>{title}</em> by Joe Attardi (O'Reilly, 2025).
        </p>
        <p className="my-2">
          Whether you're an experienced developer or just starting out, this
          site is the perfect complement to the book. With live demos of all the
          code in the book, you can see firsthand how to use the latest web
          browser APIs to build better web applications. From working with
          network requests to manipulating the DOM, this site has everything you
          need to take your web development skills to the next level. So grab
          your favorite browser and get ready to explore the world of web
          browser APIs!
        </p>
        <SignupForm />
      </div>
    </ContentOnlyLayout>
  );
}

export const Head = SEO;
