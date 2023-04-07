import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import useNavigation from '../hooks/useNavigation';
import { navList, navGroup, navGroupItem, navItem, navLink, navLinkActive } from './DemosMenu.css';
import { navMenu } from './DemosMenu.module.scss';
export default function DemosMenu() {
  const data = useNavigation('sidebar');

  return (
    <aside className="menu">

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

  // return (
  //   <ul className={navList}>
  //     {data.map((item) => (
  //       <li className={clsx(navGroupItem, navItem)} key={item.key}>
  //         <Link className={clsx(navLink)} to={item.path}>
  //           {item.title}
  //         </Link>
  //         {item.children.length > 0 && (
  //           <ul className={navGroup}>
  //             {item.children.map((child) => (
  //               <li className={clsx(navItem)} key={child.key}>
  //                 <Link
  //                   className={clsx(navLink)}
  //                   activeClassName={navLinkActive}
  //                   to={child.path}
  //                 >
  //                   {child.title}
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         )}
  //       </li>
  //     ))}
  //   </ul>
  // );
}
