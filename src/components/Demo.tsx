import React from 'react';

import InlineDemo, { DemoProps as InlineDemoProps } from './InlineDemo';
import { container, demo } from './Demo.css';

type DemoProps = InlineDemoProps & {
  title: string;
};

export default function Demo(props: DemoProps) {
  return (
    <div className={container}>
      <h1>{props.title}</h1>
      <div className={demo}>
        <InlineDemo {...props} />
      </div>
    </div>
  );
}
