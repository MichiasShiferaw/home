import React, { useState } from 'react';
import { SidebarData,ProfileInfo } from './SidebarData';
import logo from '../../avatar.svg';


const Sidebar=({children})=> {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  return (
<div style={{ display: "flex", textAlign: "center" }}>
  <div style={{ width: isOpen ? "250px" : "50px" }} className="Sidebar">
    <div className="topSection">
      <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
        Logo
      </h1>
      <div style={{ marginLeft: isOpen ? "80px" : "-10px" }} className="bars">
        <button className="btn nav_close p-0" onClick={toggle}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
          )}
        </button>
      </div>
      <hr className="bg-danger border-2 border-top border-danger" />
      {/* <hr /> */}
    </div>
    <hr />
    <div>
      <img className="logo1 pt-2 pb-1" src={logo} />
      <h2
        style={{
          display: isOpen ? "block" : "none",
          // textDecoration: "underline",
        }}
        className="h2 name pt-1 mb-2 text-wrap text-white"
      >
        Michias Shiferaw
      </h2>
    </div>
    <ul className="SidebarList">
      {SidebarData.map((val, key) => {
        return (
          <li
            className="row font-md"
            key={key}
            id={window.location.pathname == val.link ? "active" : ""}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div id="icon">{val.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} id="title">
              {val.title}
            </div>
          </li>
          
        );
      })}
    </ul>

        <ul style={{ display: isOpen ? "flex" : "block" }} className='myLogo pt-3'>
      {ProfileInfo.map((val, key) => {
        return (
          <li
            className="row line"
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
  <main>{children}</main>
</div>

  )
}

export default Sidebar