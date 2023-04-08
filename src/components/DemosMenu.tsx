import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import { navMenu, sizeLarge } from './DemosMenu.module.scss';

export default function DemosMenu({ size }) {
  const data = useNavigation('sidebar');

  return (
    <aside className={clsx('menu', navMenu, size === 'lg' && sizeLarge)}>
      {data.map(item => (
        <React.Fragment key={item.key}>
          <p className="menu-label">{item.title}</p>
          <ul className={clsx('menu-list', navMenu)}>

            {item.children.map(child => (
              <li key={child.key}>
                <Link to={child.path} activeClassName="is-active">
                  {child.title}
                </Link>
              </li>
            ))}

          </ul>
        </React.Fragment>
      ))}
    </aside>
  )
}
