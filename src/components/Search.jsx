import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { MdClear } from 'react-icons/md';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links';



const Search = () => {
  const [text, setText]  = useState('Elon Musk');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if(debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input 
        value={text}
        type="text"
        className="w-96 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button type="button" className="absolute top-1.5 md:right-3 right-4 text-2xl text-gray-500" onClick={() => setText('')}>
           <MdClear className="mt-2 px-0"/>
        </button>
      )}
      <Links />
    </div>
  )
}

export default Search;