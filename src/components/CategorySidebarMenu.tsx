import React from 'react';
import useNavigation from '../hooks/useNavigation';

export default function CategorySidebarMenu() {
  const data = useNavigation('sidebar');

  return (
    <ul className="space-y-2">
      {data.map(item => (
        <React.Fragment key={item.key}>
          <li>
            <a 
              className="text-xl my-2 md:text-lg md:my-0 text-sky-600 dark:text-sky-200"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}
