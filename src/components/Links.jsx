import React from 'react';
import { NavLink } from 'react-router-dom';


const Link = [
    { url: '/search', text: 'All 🔎'},
    { url: '/news', text: 'news 📰'},
    { url: '/image', text: 'images 📷'},
    { url: '/video', text: 'videos 📺'}
];
export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-3">
       {Link.map(({ url, text }) => (
            <NavLink to={url} className={({ isActive }) =>
               isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 px-3" : "px-3"
            }>
            { text }
            </NavLink>
               
           
       ))}
    </div>
  )
}

