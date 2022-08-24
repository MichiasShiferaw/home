import React from 'react';
import { ProfileInfo } from '../Sidebar1/SidebarData';

function Footer() {
  return (
      <footer className="footer bg-gray-light-7 justify-between pt-2 pb-3 mt-4">
    
    <div className="container mt-2">
      
      {/* copyright 2022 Michias Shiferaw */}
      <div><span className='site-title'>Logo  </span><span className='site-title'>Michias Shiferaw</span>
      </div>
      <ul className="display-f">
        {ProfileInfo.map((val, key) => {
        return (
          <li
            className="ml-1 text-hover-secondary"
            key={key}
          >
            <a className="btn p-0"href={val.link}rel="noreferrer" target="_blank">
            <div id="icon" title={val.title}>{val.icon}</div>
            </a>
          </li>
        );
      })}
      </ul>
    </div>
  </footer>
  )
}

export default Footer