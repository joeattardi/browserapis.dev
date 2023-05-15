import React, { useContext } from 'react';

import useScript from '../../hooks/useScript';
import { ThemeContext } from './Layout';

const Demo = ({ code }) => {
  const { theme } = useContext(ThemeContext);

  const js = code.filter(file => file.language === 'javascript').map(file => file.code).join('');
  const css = code.filter(file => file.language === 'css').map(file => file.code).join('');
  const html = code.filter(file => file.language === 'html').map(file => file.code).join('');

  useScript({ body: js });

  return (
    <div className={theme}>
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Demo;
