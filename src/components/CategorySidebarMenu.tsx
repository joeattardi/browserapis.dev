import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';

import useNavigation from '../hooks/useNavigation';
import { link } from './CategorySidebarMenu.module.css';


export default function CategorySidebarMenu() {
  const data = useNavigation('sidebar');

  return (
    <ul className="space-y-2 flex flex-col">
      {data.map(item => (
        <React.Fragment key={item.key}>
          <li className="flex">
            <Link 
              className={clsx(
                'sidebarLink',
                "bw-full w-full px-2 py-1 my-2 md:my-0 text-lg rounded"
              )}
              to={item.path}
              activeClassName="sidebarLinkActive"
            >
              {item.title}
            </Link>
          </li>
      </React.Fragment>
      ))}
    </ul>
  );
}
