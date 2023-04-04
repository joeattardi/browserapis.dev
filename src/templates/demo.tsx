import React from 'react';
import { graphql } from 'gatsby';

import SidebarLayout from '../components/layouts/SidebarLayout';
import InlineDemo from '../components/layouts/InlineDemo';
import CodeBlock from '../components/CodeBlock';
import useCodeImport from '../hooks/useCodeImport';

export default function Demo(props) {
  const { data, children } = props;
  // console.log(props);
  // console.log(data);

  const { code, isCodeLoaded } = useCodeImport(props.uri);

  return (
    <SidebarLayout>
      <h1>{props.pageContext.frontmatter.title}</h1>
      <div>{children}</div>
      
      

      <section>
        <h2>Demo</h2>
        <div className="demo">
          {isCodeLoaded && <InlineDemo {...code} />}
        </div>
      </section>

      <section>
        <h2>Code</h2>
        <CodeBlock code={code.js} language="javascript" />
        <CodeBlock code={code.html} language="html" />
        <CodeBlock code={code.css} language="css" />
      </section>
    </SidebarLayout>
  )
}

// export const query = graphql`
//   query ($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

export { default as Head } from '../components/Head';