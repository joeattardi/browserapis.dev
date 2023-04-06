import React from 'react';

import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import useSiteMetadata from '../hooks/useSiteMetadata';

import { heroImage } from './index.module.scss';

export default function HomePage() {
  const { title, subtitle } = useSiteMetadata();

  return (
    <ContentOnlyLayout>
      <section className="hero is-primary">
        <div className="hero-body has-text-centered">
          <h1 className="title is-1">
            {title}
          </h1>
          <h2 className="subtitle is-3">
            {subtitle}
          </h2>
          <div className="container">
            <img className={heroImage} alt="Programmer writing code" src="/coder.svg" />
          </div>
        </div>
      </section>

      <div className="container is-max-desktop">
        <p className="is-size-5 my-2">
          Welcome to the companion website for the upcoming book{' '}
          <em>{title}</em> by Joe Attardi.
        </p>
        <p className="is-size-5 my-2">
          Whether you're an experienced developer or just starting out, this
          site is the perfect complement to the book. With live demos of all the
          code in the book, you can see firsthand how to use the latest web
          browser APIs to build better web applications. From working with
          network requests to manipulating the DOM, this site has everything you
          need to take your web development skills to the next level. So grab
          your favorite browser and get ready to explore the world of web
          browser APIs!
        </p>

        <p className="is-size-5 my-2">
          Please note: The book, and this website, are both works in progress.
          Functioning examples are being added as the book is written, but there
          may be times where something is broken.
        </p>

        <p className="is-size-5 my-2">
          If you are having problems with the site or have any questions or
          feedback, please contact me at{' '}
          <a href="mailto:jattardi@gmail.com">jattardi@gmail.com</a>.
        </p>
      </div>
    </ContentOnlyLayout>
  );
}

export { default as Head } from '../components/Head';
