import React from 'react';
import { Link } from 'gatsby';
import { MdBook, MdSearchOff } from 'react-icons/md';
export default function SearchResults({ query, results }) {
  if (!query) {
    return null;
  }

  return (
    <div className="absolute top-14 right-4 rounded-md w-1/3 bg-slate-100 dark:bg-slate-800 text-gray-500 shadow-lg p-1">
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id} className="flex flex-col">
              <Link
                className="flex flex-col bg-white dark:bg-slate-500 dark:text-white text-gray-500 p-2 m-1 shadow rounded hover:bg-blue-500 hover:text-white"
                to={result.slug}
              >
                <div className="flex items-center">
                  <MdBook size={24} className="mr-2" />
                  {result.title}
                </div>
                <small className="ml-8">{result.excerpt}</small>
              </Link>
            </li>
          ))}
        </ul>
      ) 
      
      : 
      
      (
        <div className="p-2 flex flex-col items-center text-gray-500 dark:text-gray-400">
          <MdSearchOff size={64} className="mb-2" />
          <div>No results found.</div>
        </div>
      )}
    </div>
  );
}
