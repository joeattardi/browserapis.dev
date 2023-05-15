import { useState, useEffect, useCallback } from 'react';

const defaultCode = [
  { name: 'index.js', language: 'javascript' },
  { name: 'index.html', language: 'html' }
]

export default function useCodeImport(basePath, codeFiles = defaultCode) {
  const [code, setCode] = useState([]);
  const [isCodeLoaded, setIsCodeLoaded] = useState(false);

  const loadCode = useCallback((name, language, title, description) => {
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
  }, [codeFiles, loadCode]);

  return {
    code,
    isCodeLoaded
  };
}
