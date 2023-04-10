import React, { useState } from 'react';
import clsx from 'clsx';

import { MdSearch } from 'react-icons/md';
import { useFlexSearch } from 'react-use-flexsearch';

import useSearchIndex from '../hooks/useSearchIndex';
import { resultsList, resultItem, searchInput, icon } from './Search.module.scss';
import { Link } from 'gatsby';

export default function Search() {
  const [query, setQuery] = useState('');
  const { index, store } = useSearchIndex();
  const results = useFlexSearch(query, index, store);

  console.log(results);

  function onSearch(event) {
    setQuery(event.target.value);
  }

  console.log({ query });

  return (
    <>
      <MdSearch size={32} className={icon} />
      <input
        type="search"
        value={query}
        onChange={onSearch}
        placeholder="Search recipes..."
        className={clsx('input', searchInput)}
      />
      {results?.length > 0 && (
        <div className={clsx(resultsList, 'p-0 box')}>
          <ul>
            {results.map(result => (
              <li key={result.id} className="box p-3 m-2">
                <Link className={clsx(resultItem, 'p-0')} to={result.slug}>{result.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
