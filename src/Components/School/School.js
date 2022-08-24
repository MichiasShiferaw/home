import React from 'react'
import { SchoolData } from './SchoolData'

function School() {
  return (
    <section id="school" className="mt-5">
    <div className="container text-dark">
              <div className="row pb-5">
                <div className="col-md-12 col-lg-6">
                  <h1 className="text-white pb-2">Education</h1>
                  <div className="educate rounded shadow-dark text-start overflow-hidden">
                    {SchoolData.map((val,key)=>{
                      return(
                        <div key={key} className="card education verticalLine d-flex mb-3 w-100 p-3 pb-1 border-bottom" data-aos="flip-down">
                      <div className="text-primary d-flex justify-content-center px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-mortarboard"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                          <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                        </svg>
                      </div>
                      <div className="content mb-5 ps-3">
                        <span className="time">{val.time}</span>
                        <h3 className="title"> {val.title}</h3>
                        <h4 className="lead"> {val.institution}</h4>
                        <span>
                          <i className="bi bi-geo-alt me-2"></i> {val.location}
                        </span>
                        <p>
                          <strong>{val.subtitle}</strong>: {val.coursework}
                        </p>
                      </div>
                    </div>

                      )
                    })}
                    
                    <div className="vr"></div>
                  </div>
                  {/* </div> */}
                </div>
                </div>
                </div>
  </section>
  )
}

export default School