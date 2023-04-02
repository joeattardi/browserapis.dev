import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import useNavigation from '../hooks/useNavigation';
import { sidebar, navList, navGroup, navGroupItem, navItem, navLink, navLinkActive } from './Sidebar.css';

export default function Sidebar() {
  const data = useNavigation('sidebar');

  return (
    <aside className={sidebar}>
      <nav>
        <ul className={navList}>
          {data.map((item) => (
            <li className={clsx(navGroupItem, navItem)} key={item.key}>
              <Link className={clsx(navLink)} to={item.path}>{item.title}</Link>
              {item.children.length > 0 && (
                <ul className={navGroup}>
                  {item.children.map(child => (
                    <li className={clsx(navItem)} key={child.key}>
                      <Link className={clsx(navLink)} activeClassName={navLinkActive} to={child.path}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
