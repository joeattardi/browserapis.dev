import React from 'react';
import { MdWarningAmber, MdOpenInNew } from 'react-icons/md';
import Alert from './Alert';

export default function CompatibilityNote({ name, url }) {
  return (
    <Alert title={`Compatibility Note: ${name}`} icon={MdWarningAmber}>
      <div>
        <p className="my-2">
          This feature may not be supported on all browsers yet. Please check
          the latest compatibility data before using in a production
          application.
        </p>
        <p className="my-2">
          <a
            target="_blank"
            className="flex items-center underline"
            href={url}
          >
            Browser support for {name}
            <MdOpenInNew className="ml-2" />
          </a>
        </p>
      </div>
    </Alert>
  );
}
