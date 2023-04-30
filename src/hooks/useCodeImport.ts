import { useState, useEffect, useCallback } from 'react';

type CodeFile = {
  name: string;
  language: string;
  title?: string;
  description?: string;
}

export type LoadedCode = CodeFile & {
  content: string;
}

const defaultCode: CodeFile[] = [
  { name: 'index.js', language: 'javascript' },
  { name: 'index.html', language: 'html' }
]

export default function useCodeImport(basePath: string, codeFiles: CodeFile[] = defaultCode) {
  const [code, setCode] = useState<LoadedCode[]>([]);
  const [isCodeLoaded, setIsCodeLoaded] = useState(false);

  const loadCode = useCallback((name: string, language: string, title: string, description?: string) => {
    return import(`!raw-loader!/static/code${basePath}/${name}`)
      .then(content => ({ name, language, title, description, content: content.default }))
      .catch(error => {
        console.log(error);
        return ''
    })
  }, []);

  useEffect(() => {
    Promise.all(codeFiles.map(({ name, language, title, description }) => loadCode(name, language, title, description)))
      .then(results => {
        setCode(results);
        setIsCodeLoaded(true);
      });

    // const promises = [
    //   loadCode('index.css'),
    //   loadCode('index.html')
    // ];

    // codeFiles.forEach(({ name, language, caption }) => {
    //   promises.push(loadCode(name, language, caption));
    // })

    // Promise.all([
    //   loadCode('index.js'),
    //   loadCode('index.css'),
    //   loadCode('index.html')
    // ]).then(([js, css, html]) => {
    //   setCode({ js, css, html });
    // });
  }, [loadCode]);

  return {
    code,
    isCodeLoaded
  };
}
