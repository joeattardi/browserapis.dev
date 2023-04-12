import { useState, useEffect, useCallback } from 'react';

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

  const loadCode = useCallback((filename: string) => {
    return import(`!raw-loader!/static/code${basePath}/${filename}`)
      .then(result => result.default)
      .catch(error => '');
  }, []);

  useEffect(() => {
    Promise.all([
      loadCode('index.js'),
      loadCode('index.css'),
      loadCode('index.html')
    ]).then(([js, css, html]) => {
      setCode({ js, css, html });
    });
  }, [loadCode]);

  const isCodeLoaded = Object.values(code).every(file => file != null);

  return {
    code,
    isCodeLoaded
  };
}
