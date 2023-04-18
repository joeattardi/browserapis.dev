import React, { ChangeEvent, useState } from 'react';
import clsx from 'clsx';

import { MdSearch, MdBook } from 'react-icons/md';
import { useFlexSearch } from 'react-use-flexsearch';

import useSearchIndex from '../hooks/useSearchIndex';
import { Link } from 'gatsby';
import SearchResults from './SearchResults';

type SearchResult = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
}

export default function Search() {
  const [query, setQuery] = useState('');
  const searchIndex = useSearchIndex();
  const results: SearchResult[] = useFlexSearch(query, searchIndex?.index, searchIndex?.store);

  function onSearch(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <div className="flex items-center relative pl-2">
      <MdSearch size={32} className="h-7 absolute left-3 text-slate-200" />
      <input
        type="search"
        value={query}
        onChange={onSearch}
        placeholder="Search"
        className={clsx(
          'rounded-full pl-10 pr-2 py-1 md:py-1 text-lg',
          'bg-slate-400 placeholder:text-slate-200'
        )}
        // className="placeholder:text-slate-400 rounded-lg pl-8 pr-2 bg-gray-800 text-white py-2 md:py-1"
      />
      <SearchResults query={query} results={results} />
    </div>
  );
}
