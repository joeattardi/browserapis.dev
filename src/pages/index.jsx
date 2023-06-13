import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import ContentOnlyLayout from '../components/layouts/ContentOnlyLayout';
import SEO from '../components/Seo';
import useCategories from '../hooks/useCategories';
import Card from '../components/Card';

export default function HomePage() {
  const { title, subtitle } = useSiteMetadata();
  const data = useCategories();

  return (
    <ContentOnlyLayout>
      <section className="text-center">
        <div>
          <img
            className="mx-auto hidden md:block w-1/4 my-8"
            alt="Web browser with code"
            src="/logo.svg"
          />
          <h1 className="text-2xl md:text-6xl mb-2">{title}</h1>
          <h2 className="text-lg md:text-4xl mb-2">{subtitle}</h2>
          <h3 className="text-lg md:text-2xl">by <a className="underline" href="https://joeattardi.dev">Joe Attardi</a></h3>
          
          <p className="mt-8 text-xl md:text-3xl">Explore web browser APIs with live demos.</p>
          <div className="my-4">
            <div className="my-8 auto-rows-fr grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card
                title="Sign Up!"
                href="/signup"
              >
                Sign up to receive email updates about the book.
              </Card>
              {data.map((category) => (
                <Card
                  chapter={category.frontmatter?.order}
                  key={category.frontmatter?.key}
                  title={category.frontmatter?.title}
                  href={category.frontmatter?.slug}
                >
                  {category.frontmatter?.summary}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ContentOnlyLayout>
  );
}

export const Head = SEO;
