import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { MdCategory } from 'react-icons/md';
import useNavigation from '../hooks/useNavigation';

export default function CategorySidebarMenu({ path }) {
  const data = useNavigation('sidebar');

  return (
    <ul className="space-y-2 flex flex-col">
      {data.map(item => (
        <React.Fragment key={item.key}>
          <li className="flex flex-col">
            <Link 
              className={clsx(
                'sidebarLink',
                'font-bold bw-full w-full px-2 py-4 my-0 md:py-2 text-lg rounded'
              )}
              to={item.path}
              activeClassName="sidebarLinkActive"
            >
              <span className="flex items-center text-xl md:text-base">
                <MdCategory className="mr-2" />
                {item.title}
              </span>
            </Link>
                <ul>
                  {item.children?.map(child => (
                    <li key={child.key}>
                      <Link 
                        activeClassName="sidebarLinkActive" 
                        className={clsx(
                          'sidebarLink',
                          'bw-full w-full pl-8 px-2 py-4 my-0 md:py-2 text-base rounded'
                        )} 
                        to={child.path}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
          </li>
      </React.Fragment>
      ))}
    </ul>
  );
}
