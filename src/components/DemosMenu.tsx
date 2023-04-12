import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import MenuLink from './MenuLink';

export default function DemosMenu() {
  const data = useNavigation('sidebar');

  return (
    <aside>
      {data.map(item => (
        <React.Fragment key={item.key}>
          <p className="text-sky-600 font-bold">{item.title}</p>
          <ul className="mb-4">
            {item.children?.map(child => (
              <li key={child.key}>
                <MenuLink to={child.path}>{child.title}</MenuLink>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </aside>
  );
}
