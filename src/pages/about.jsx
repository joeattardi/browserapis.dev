import React from 'react';
import PageTitle from '../components/PageTitle';
import Layout from '../components/layouts/Layout';
import { Link } from 'gatsby';
import SEO from '../components/Seo';

exports.frontmatter = {
  title: 'About',
  slug: '/about',
  nav: {
    key: 'about',
    group: 'topnav',
    order: 3,
  },
};

export default function AboutPage() {
  return (
    <Layout>
      <PageTitle>About the Book</PageTitle>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>
          <em>Web Browser API Cookbook</em> is an upcoming book by Joe Attardi, due to be published by O'Reilly 
          Media in 2025. The book contains examples or "recipes" demonstrating how to accomplish specific
          tasks using only the APIs built in to modern web browsers.
        </p>

        <p>
          Many things that once required third-party JavaScript libraries or browser plugins are now supported
          by the browser platform itself.
        </p>

        <p>
          The book will cover topics such as:
        </p>

        <ul>
            <li>Working with persisted data and local files</li>
            <li>Internationalization</li>
            <li>Speech synthesis and recognition</li>
            <li>Communciating with APIs and real-time data</li>
            <li>Reacting to changes in the DOM</li>
            <li>Custom elements</li>
            <li>Reading device information and sensors</li>
            <li>Performance statistics</li>
            <li>The Web Animations API</li>
          </ul>

        <p>
          If you'd like to receive occasional email updates about the book's progress, 
          you can <Link to="/signup">sign up for the mailing list</Link>.
        </p>
      </div>

      <PageTitle>About the Author</PageTitle>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>
          Joe Attardi is a software developer and author with over 18 years of programming experience, 
          specializing in frontend development and JavaScript. He has worked on a variety of large-scale 
          projects for companies such as Synopsys, Salesforce, Constant Contact, and Dell.
        </p>

        <p>
          He is the author of <a href="https://link.springer.com/book/10.1007/978-1-4842-6294-8"><em>Modern CSS (2020)</em></a> and 
          {' '}<a href="https://link.springer.com/book/10.1007/978-1-4842-6297-9"><em>Using Gatsby and Netlify CMS (2020)</em>.</a>
        </p>

        <p>
          Joe lives in the Boston area with his wife and son.
        </p>
      </div>
    </Layout>
  )
}

export const Head = props => <SEO {...props} pageTitle="About" />;