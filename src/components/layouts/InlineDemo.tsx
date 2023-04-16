import React, { useEffect, useContext } from 'react';

import useScript from '../../hooks/useScript';
import { ThemeContext } from './Layout';

export type DemoProps = {
  js: string;
  css: string;
  html: string;
}

const Demo = ({ js, css, html }: DemoProps) => {
  const { theme } = useContext(ThemeContext);

  useScript({ body: js });

  return (
    <div className={theme}>
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Demo;
