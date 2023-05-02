import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { dracula, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ThemeContext } from './layouts/Layout';

export type CodeFile = {
  name: string;
  language: string;
  code: string;
  title: string;
}

const languageClass = {
  javascript: 'bg-yellow-400',
  html: 'bg-orange-400',
  css: 'bg-blue-400'
};

const languageTags = {
  javascript: 'JavaScript'
};

export default function CodeBlock({ language, code, title }: CodeFile) {
  const [copied, setCopied] = useState(false);
  const { theme } = useContext(ThemeContext);

  function onCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  }

  const Icon = copied ? MdCheck : MdContentCopy;

  if (!code) {
    return null;
  }

  return (
    <section>
      <h3 className="text-xl my-2">{title}</h3>
      <div className="shadow">
        <div className="bg-gray-200 flex items-center justify-between p-2 dark:bg-gray-800">
          <div 
            className={clsx('px-2 py-1 text-sm text-black', languageClass[language])}
          >
              {languageTags[language] || language.toUpperCase()}
          </div>
          <CopyToClipboard text={code} onCopy={onCopy}>
            <button className="flex items-center" title="Copy to clipboard">
              <Icon size={24} />
            </button>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter
          customStyle={{ fontSize: '1rem', marginTop: 0, borderRadius: 0, marginBottom: 0 }} 
          language={language} 
          style={theme === 'light' ? solarizedlight : dracula}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
