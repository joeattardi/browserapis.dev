import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';

import useNavigation from '../hooks/useNavigation';
import { active, link } from './CategorySidebarMenu.module.css';


export default function CategorySidebarMenu() {
  const data = useNavigation('sidebar');

  return (
    <ul className="space-y-2 flex flex-col">
      {data.map(item => (
        <React.Fragment key={item.key}>
          <li className="flex">
            <Link 
              className={clsx(
                link,
                "bw-full w-full px-2 py-1 text-xl my-2 md:text-lg md:my-0 text-sky-600 dark:text-sky-200",
                "hover:bg-sky-50"
              )}
              to={item.path}
              activeClassName={active}
            >
              {item.title}
            </Link>
          </li>
      </React.Fragment>
      ))}
    </ul>
  );
}
