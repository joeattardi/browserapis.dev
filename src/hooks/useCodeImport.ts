import { useState, useEffect } from 'react';

type LoadedCode = {
  js: string | null;
  css: string | null;
  html: string | null;
};

export default function useCodeImport(basePath: string) {
  const [code, setCode] = useState<LoadedCode>({
    js: null,
    css: null,
    html: null
  });

  useEffect(() => {
    Promise.all([
      import(`!raw-loader!/static/code${basePath}/index.js`),  
      import(`!raw-loader!/static/code${basePath}/index.css`),
      import(`!raw-loader!/static/code${basePath}/index.html`)
    ]).then(([js, css, html]) => {
      setCode({
        js: js.default,
        css: css.default,
        html: html.default
      });
    });
  }, []);

  const isCodeLoaded = Object.values(code).every(file => file != null);

  return {
    code,
    isCodeLoaded
  };
}
