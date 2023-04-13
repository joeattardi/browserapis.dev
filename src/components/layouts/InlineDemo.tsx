import React, { useEffect, useContext } from 'react';

import { ThemeContext } from './Layout';

export type DemoProps = {
  js: string;
  css: string;
  html: string;
}

const Demo = ({ js, css, html }: DemoProps) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const script = document.createElement('script');

    // Wrap in an IIFE to prevent global variables
    script.textContent = `
      (function() {
        ${js}
      })();
    `

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={theme}>
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Demo;
