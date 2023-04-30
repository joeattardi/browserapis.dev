import React, { useEffect, useContext } from 'react';

import useScript from '../../hooks/useScript';
import { ThemeContext } from './Layout';
import { LoadedCode } from '../../hooks/useCodeImport';

export type DemoProps = {
  code: LoadedCode[]
}

const Demo = ({ code }: DemoProps) => {
  const { theme } = useContext(ThemeContext);

  const js = code.filter(file => file.language === 'javascript').map(file => file.content).join('');
  const css = code.filter(file => file.language === 'css').map(file => file.content).join('');
  const html = code.filter(file => file.language === 'html').map(file => file.content).join('');


  useScript({ body: js });

  return (
    <div className={theme}>
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Demo;
