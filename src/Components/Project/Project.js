import React from 'react';
// import Bootstrap from "../../Assets/bootstrap1.png";
// import Firebase from "../../Assets/firebase.png";
// import React1 from "../../Assets/react.png";
// import Vanilla from "../../Assets/vanillajs.png";
import { ProjectData } from './ProjectData';

function Work() {
  // const bootstrap="bootstrap1.png";
  // const bootstrap="bootstrap1.png";
  // const bootstrap="bootstrap1.png";
  // const vanillajs="bootstrap1.png";
  return (
     <section id="Project" className="mt-2">
    <div className="container">
      <h2 className="mb-2 text-start text-pacman">My Projects ...</h2>
      <div className="row gap-2">
        {ProjectData.map((val,key)=>{
          return (
            <div key={key} className="col-12-xs col-6-md col-4-lg">
              <div
                className={`card p-0 ${key % 2 ? "bg-paccyan" : "bg-pacpink"}`}
              >
                <span className="badge-orange badge1 text-center text-white ml-1">
                  new
                </span>
                <h3 className="card-title m-1 mb-0 mt-0">{val.title}</h3>

                <img src="/img/mario.png" alt="" />
                <p className="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
                <div className="card-footer display-f mt-auto justify-space-between">
                  <div className="mr-auto mt-auto text-muted">
                    {val.tools.map((val1, key1) => {
                      return (
                        <img
                          src={`https://MichiasShiferaw.github.io/home/IMG/${val1}.png`}
                          key={key1}
                          alt={val1}
                          width="32"
                          height="32"
                          title={val1}
                        />
                      );
                    })}
                  </div>

                  <div className="seemore display-f align-items-center mr-3">
                    <small>See More</small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </section>
  )
}

export default Work