import React, { useEffect } from 'react';

import Layout from './Layout';
import CodeBlock from './CodeBlock';

export default function DemoLayout({ title, js, css, html, pageContext }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = js;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <div>
      <h1>{title}</h1>

      <main>
        <style>{css}</style>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  );
}
