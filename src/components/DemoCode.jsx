import React from 'react';

import CodeBlock from './CodeBlock';

export default function DemoCode({ pageContext }) {
  console.log(pageContext);

  return (
    <div>
      <h2>Code</h2>
      {pageContext.frontmatter.files.map(file => (
        <div key={file}>
          <h3>{file}</h3>
          {/* <CodeBlock code={file.code} language={file.language} /> */}
        </div>
      ))}
    </div>
  );
}
