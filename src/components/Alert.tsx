import React from 'react';
import clsx from 'clsx';

import { alert } from './Alert.module.scss';

export default function Alert({ icon, title, children }) {
  const IconComponent = icon;

  return (
    <div className={clsx('notification is-warning', alert)}>
      <div>{}</div>
      <div>
        <h2 className="subtitle is-flex is-align-items-center has-text-weight-bold">
          <IconComponent className="mr-2" size={32} />
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
