import React, { useState } from 'react';
import clsx from 'clsx';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { codeBlock, copyButton, toolbar, html, css, javascript } from './CodeBlock.module.scss';

const languageClass = {
  javascript,
  html,
  css
};

const languageTags = {
  javascript: 'JS'
};

export default function CodeBlock({ isLoading, language, code }) {
  const [copied, setCopied] = useState(false);

  function onCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  }

  const Icon = copied ? MdCheck : MdContentCopy;

  if (isLoading) {
    return <Skeleton width="100%" height="5em" style={{ margin: '1em auto' }} />;
  }

  return (
    <div className={codeBlock}>
      <div className={toolbar}>
        <div className={clsx('tag is-medium', languageClass[language])}>{languageTags[language] || language.toUpperCase()}</div>
        <CopyToClipboard text={code} onCopy={onCopy}>
          <button className={clsx('button', copyButton, copied && 'is-success is-light')}>
            <Icon className="mr-2" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        customStyle={{ fontSize: '1rem' }} 
        language={language} 
        style={dracula}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
