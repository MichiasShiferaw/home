import React from 'react';
import Bootstrap from "../../Assets/bootstrap1.png";
import Firebase from "../../Assets/firebase.png";
import React1 from "../../Assets/react.png";
import Vanilla from "../../Assets/vanillajs.png";
import { ProjectData } from './ProjectData';

function Work() {
  // Vanilla.
  return (
     <section id="Project" className="mt-2">
    <div className="container">
      <h2 className="mb-2 text-start">My Project</h2>
      <div className="row gap-2">
        {ProjectData.map((val,key)=>{
          return(
          <div key={key} className="col-12-xs col-6-md col-4-lg">
          <div className="card p-0 bg-green">
            <span className="badge-orange badge1 text-center text-white ml-1">new</span>
            <h3 className="card-title m-1 mb-0 mt-0">
              {val.title}
            </h3>
            
            <img src="/img/mario.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
            {/* <hr className='border'/> */}
            <div className='card-footer display-f mt-auto justify-space-between'>
              <div className='mr-auto mt-auto text-muted'>
                {val.tools.map((val1,key1)=>{
                  return(
                    <img src="./IMG/bootstrap1.png" key={key1} alt={val1} width="32" height="32" title={val1}/>
                  )
                })}
                              {/* <img src={Bootstrap} alt="Bootstrap" width="32" height="32" title='Bootstrap 5'/>
                <img src={React1} alt="ReactJs" width="32" height="32" title='ReactJS'/>
                <img src={Firebase} alt="ReactJs" width="32" height="32"/> */}
              </div> 
              
              <div className="seemore display-f align-items-center mr-3">
              <small>See More</small>
              </div>
              </div>
          </div>
        </div>


          )
        })}
        
        {/* <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1">Project 2</h3>
            <img src="./logo512.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
        <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1">Project 3</h3>
            <img src="/img/marmite.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
        <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1">Project 4</h3>
            <img src="/img/notes.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
        <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1 mb-0">
              Project 5 
            </h3>
            <img src="/img/mario.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
        <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1">Project 6</h3>
            <img src="/img/food.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
            <ul className="display-f list-unstyled mt-auto">
              <li className="mr-auto">
                              <img src={Bootstrap} alt="Bootstrap" width="32" height="32" title='Bootstrap 5'/>
                <img src={React1} alt="ReactJs" width="32" height="32" title='ReactJS'/>
                <img src={Firebase} alt="ReactJs" width="32" height="32"/>
              </li>
              <li className="d-flex align-items-center mr-3">
                <small>See More</small>
              </li>
            </ul>
          
          </div>
        </div>
        <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1">Project 7</h3>
            <img src="/img/marmite.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hicgdergsdfsdf s wer!</p>
          </div>
        </div>
        <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1">Project 8</h3>
            <img src="/img/notes.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div> */}
      </div>
      {/* <div className="row justify-center mt-2">
        <button className="btn-secondary text-white font-md">View All</button>
      </div> */}
    </div>
  </section>
  )
}

export default Work