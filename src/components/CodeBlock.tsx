import React, { useState } from 'react';
import clsx from 'clsx';
import dracula from 'prism-react-renderer/themes/dracula';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy, MdCheck } from 'react-icons/md';

import { codeBlock, tag, lang, toolbar, copyButton, copySuccess } from './CodeBlock.css';

const languageTags = {
  javascript: 'JS'
}

export default function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  function onCopy() {
    setCopied(true);

    setTimeout(() => setCopied(false), 5000);
  }

  return (
    <div className={codeBlock}>
      <div className={toolbar}>
        <div className={clsx(tag, lang[language])}>{languageTags[language] || language.toUpperCase()}</div>
        <CopyToClipboard text={code} onCopy={onCopy}>
          <button className={clsx(copyButton, copied && copySuccess)}>
            {copied ? <MdCheck /> : <MdContentCopy />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
      <Highlight {...defaultProps} code={code} language={language} theme={dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
