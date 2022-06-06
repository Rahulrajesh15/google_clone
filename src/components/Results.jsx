import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';
import ReactPlayer from 'react-player';


export const Results = () => {
  const {results, getResults, searchTerm, isLoading} = useResultContext();
  const location = useLocation();

  useEffect(() => {
     getResults(`${location.pathname}/q=${searchTerm}&num=50`)
  }, [searchTerm, location.pathname]);

  console.log(results);


  if(isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
           {results?.map(({ link, title }, index) => (
               <div key={index} className="md:w-2/5 w-full">
                  <a href={link} target="_blank" rel="noreferrer">
                     <p className="text-sm">
                        {link.length > 30 ? link.substring(0, 30) : link}
                     </p>
                     <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                        {title}
                     </p>
                  </a>
               </div>
           
           ))}
        </div>
      )
    case '/news':
      return (
        <div className="flex flex-wrap justify-center items-center">
        {results?.map(({ links, id, source, title }) => (
            <a href={links?.[0].href} className="sm:p-3 p-5 hover:underline" key={id} target="_blank" rel="noreferrer">
                <p className="w-36 break-words text-sm mt-2 dark:text-blue-300 text-blue-700">
                    {title}
                </p>
                <div className="flex gap-4">
                   <a href={source?.href} target="_blank" rel="noreferrer">
                      {source?.href.length > 20 ? source?.href.substring(0,20) + "..." : source?.href}
                   </a>
                </div>
            </a>
        ))}

      </div> 
      )
    case '/image':
      return (
       <div className="flex flex-wrap justify-center">
          {results?.map(({ image, link: { href, title }}, index) => (
              <a href={href} className="sm:p-3 p-5" key={index} target="_blank" rel="noreferrer">
                  <img src={image?.src} alt={title} loading="lazy" />
                  <p className="w-36 break-words text-sm mt-2">
                      {title}
                  </p>
              </a>
          ))}

      </div> 
      )
    case '/video':
      return (
        <div className="flex flex-wrap justify-center">
           {results?.map(( video, index ) => (
              <div key={index} className="p-3">
                  <ReactPlayer url={video.additional_links?.[0].href} controls width="300px" height="200px"/>
              </div>
           ))}
        </div> 
      )
    default:
      return 'ERROR!';
  }
}
