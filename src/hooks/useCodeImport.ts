import { useState, useEffect } from 'react';

type LoadedCode = {
  js: string;
  css: string;
  html: string;
};

export default function useCodeImport(basePath: string) {
  const [code, setCode] = useState<LoadedCode>({
    js: '',
    css: '',
    html: ''
  });

  useEffect(() => {
    Promise.all([
      import(`!raw-loader!../pages${basePath}/index.js`),  
      import(`!raw-loader!../pages${basePath}/index.css`),
      import(`!raw-loader!../pages${basePath}/index.html`)
    ]).then(([js, css, html]) => {
      setCode({
        js: js.default,
        css: css.default,
        html: html.default
      });
    });
  }, []);

  const isCodeLoaded = Object.values(code).every(file => file.length);

  return {
    code,
    isCodeLoaded
  };
}
