import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import logo from '../../avatar-2.svg';


const Sidebar=({children})=> {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  return (
    <div style={{display:"flex", textAlign:"center"}}>
    <div style={{width: isOpen ? "250px" : "50px"}} className='Sidebar'>
        <div className='topSection'>
            <h1 style={{display:isOpen?"block":"none"}} className="logo">Michias</h1>
            <div style={{marginLeft: isOpen ? "80px" : "0px"}} className="bars">
                       <button className="nav_btn"  onClick={toggle}>{isOpen?(<i class="bi bi-arrow-left-circle"></i>):(<i class="bi bi-arrow-right-circle"></i>)}</button>
                   </div>
                 <hr className="bg-danger border-2 border-top border-danger"/>
                 {/* <hr /> */}
                   
        </div>
        <hr />
        <div>
        <img className="logo1 pt-2 pb-1"src={logo}/>
        <div style={{display:isOpen?"block":"none",textDecoration: "underline"}} class="h4 name pt-1 mb-2 text-wrap">Michias Shiferaw</div>
        </div>
        <ul className='SidebarList pt-5'>{SidebarData.map((val,key)=>{
        return(
            <li className="row" key={key} id={window.location.pathname== val.link? "active":""} onClick={()=>{window.location.pathname=val.link}}>
                <div id="icon">{val.icon}</div>
                <div  style={{display: isOpen ? "block" : "none"}} id="title">{val.title}</div>
            </li>

        )
    })}</ul></div>
    <main className='bg-gray'>{children}</main>
    </div>
  )
}

export default Sidebar