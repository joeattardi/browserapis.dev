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
          <h1 className="text-6xl md-text-4xl mb-2">{title}</h1>
          <h2 className="text-4xl md:text-4xl mb-2">{subtitle}</h2>
          <h3 className="text-2xl">by <a className="underline" href="https://joeattardi.dev">Joe Attardi</a></h3>
          <img
            className="mx-auto w-2/3 max-w-md my-8"
            alt="Web browser with code"
            src="/browser_icon_3.svg"
          />
          
          <p className="text-3xl">Explore web browser APIs with live demos.</p>
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
                  key={category.frontmatter?.key}
                  title={category.frontmatter?.title}
                  href={category.frontmatter?.slug}
                >
                  {category.excerpt}
                </Card>
              ))}
            </div>
            {/* <SignupForm /> */}
          </div>
        </div>
      </section>
    </ContentOnlyLayout>
  );
}

export const Head = SEO;
