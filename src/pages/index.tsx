import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import SidebarLayout from '../components/layouts/SidebarLayout';
import SignupForm from '../components/SignupForm';

export default function HomePage() {
  const { title, subtitle } = useSiteMetadata();

  return (
    <SidebarLayout>
      <section className="mb-4 text-center p-8">
        <div>
          <h1 className="font-serif text-3xl md:text-5xl mb-2">
            {title}
          </h1>
          <h2 className="font-serif text-xl md:text-3xl">
            {subtitle}
          </h2>
          <img className="mx-auto w-full md:w-1/2 mt-8" alt="Web browser with code" src="/browser_icon_3.svg" />
        </div>
      </section>

      <div className="leading-relaxed text-lg p-4 max-w-7xl mx-auto">
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
    </SidebarLayout>
  );
}

export { default as Head } from '../components/Head';
