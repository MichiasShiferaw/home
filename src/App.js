import './App.css';
import Modal from './Components/Modal/modal';
import Sidebar from './Components/Sidebar1/Sidebar';
import { ProfileInfo } from './Components/Sidebar1/SidebarData';
import logo from './Portrait1.png';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>Prep for Github Website</p> */}

  <nav className="navbar justify-between bg-gray">
    <div className="container">
      <h1 className="site-title">Michias Shiferaw</h1>
      <ul className="display-f">
        <li className="ml-1 text-hover-secondary"><a href="#work">Work</a></li>
        <li className="ml-1 text-hover-secondary"><a href="#about">About</a></li>
        <li className="ml-1 text-hover-secondary"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav> 
<Sidebar>
{/* colors */}
 {/* <!-- navbar --> */}

  
  

  {/* <!-- intro --> */}
  <div className="container mt-5">
    <div className="row justify-center">
      <div className="col-12-xs col-9-md">
        <p className="text-gray mb-2">Hi</p>
        <h2>
          
          <div className="font-xxl">Michias Shiferaw</div>
          <div className="font-xl text-secondary">Developer</div>
        </h2>
        <p className="text-gray mt-2 mb-3">Welcome to my Website!</p>
        <a href="#work" className="btn-outlined-secondary text-secondary text-hover-white">View My Work</a>
      </div>
      <div id="mylogo1"className="col-12-xs col- col-3-md ">
        <img src={logo} alt=""/>
      </div>
    </div>
  </div>

  {/* <!-- about --> */}
  <section id="about" className="bg-secondary-light-9 mt-5 pt-4 pb-4">
    <div className="container">
      <h2 className="mb-2">About Me!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam animi aliquid sequi fuga, nam nesciunt dolore libero dolorem exercitationem aliquam cupiditate atque illo, quae dicta doloribus et? Ab ipsam inventore quam asperiores, sequi unde tenetur accusamus, distinctio magni necessitatibus quis deserunt id alias. Iste eum ea labore rerum voluptatibus.</p>
      {/* <p className="mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nam, corrupti dolorum inventore perspiciatis id illum repellat iste amet sapiente ducimus nihil molestias quasi, totam, ratione minima molestiae blanditiis iure consequatur praesentium debitis. Nulla maiores doloremque tempore nobis dolorum amet!</p> */}
    </div>
  </section>

  {/* <!-- work section --> */}
  <section id="work" className="mt-5">
    <div className="container">
      <h2 className="mb-2">My Work</h2>
      <div className="row gap-2">
        <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1 mb-0">
              Project 1 
            </h3>
            <span className="badge-orange text-white ml-1">new</span>
            <img src="/img/mario.png" alt=""/>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
        <div className="col-12-xs col-6-md col-4-lg">
          <div className="card h-100 p-0">
            <h3 className="card-title m-1">Project 2</h3>
            <img src="/img/food.png" alt=""/>
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
              <li className="me-auto">
                              <img src={'./tools/bootstrap1.png'} alt="Bootstrap" width="32" height="32" title='Bootstrap 5'/>
                <img src={'./tools/react.png'} alt="ReactJs" width="32" height="32" title='ReactJS'/>
                <img src={'./tools/firebase.png'} alt="ReactJs" width="32" height="32"/>
              </li>
              <li className="d-flex align-items-center me-3">
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
        </div>
      </div>
      {/* <div className="row justify-center mt-2">
        <button className="btn-secondary text-white font-md">View All</button>
      </div> */}
    </div>
  </section>


  <section id="school" className="mt-5">
    <div className="container text-dark">
              <div className="row pb-5">
                <div className="col-md-12 col-lg-6">
                  <h1 className="text-white pb-2">Education</h1>
                  <div className="educate rounded shadow-dark text-start overflow-hidden">
                    <div className="card education verticalLine d-flex mb-3 w-100 p-3 pb-1 border-bottom" data-aos="flip-down">
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
                        <span className="time">2020-Present</span>
                        <h3 className="title"> Software Engineering</h3>
                        <h4 className="lead"> Mother Tersea</h4>
                        <span>
                          <i className="bi bi-geo-alt me-2"></i>Ontario, Canada
                        </span>
                        <p>
                          <strong>Revevant Coursework</strong>: Object Oriented
                          Programming, Data Structures and Algorithms,
                          Introduction to Software Engineerin
                        </p>
                      </div>
                    </div>
                    <div className="card education verticalLine d-flex mb-3 w-100 p-3 pb-1 border-bottom" data-aos="flip-down">
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
                        <span className="line"></span>
                      </div>
                      <div className="content mb-5 ps-3">
                        <span className="time">2020-2021</span>
                        <h3 className="title"> Software Engineering</h3>
                        <h4 className="lead"> Code Academy</h4>
                        <span>
                          <i className="bi bi-geo-alt me-2"></i>Ontario, Canada
                        </span>
                        <p>
                          Focuses in: JavaScript, JSON, HTML/CSS, Ruby, Ruby on
                          Rails, MySQL, PostgreSQL, GraphQL
                        </p>
                      </div>
                    </div>
                    <div className="card education verticalLine d-flex mb-3 w-100 p-3 pb-1 border-bottom" data-aos="flip-down">
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
                        <span className="time">2019-2020</span>
                        <h3 className="title"> High School</h3>
                        <h4 className="lead"> Mother Tersea</h4>
                        <span>
                          <i className="bi bi-geo-alt me-2"></i>Ontario, Canada
                        </span>
                        <p>
                          <strong>Revevant Coursework</strong>: Object Oriented
                          Programming, Data Structures and Algorithms,
                          Introduction to Software Engineerin
                        </p>
                      </div>
                    </div>
                    <div className="vr"></div>
                  </div>
                  {/* </div> */}
                </div>
                </div>
                </div>
  </section>

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

<div className='mt-5'>Done! Ignore the Rest</div>
<hr className='bg-black mb-5'/>

  <div className="container">

<h2>Colors</h2>
    <span className="text-primary">primary text</span> | 
    <span className="text-secondary">secondary text</span> | 
    <span className="text-error">error text</span> | 
    <span className="text-info">info text</span> | 
    <span className="text-blue">blue text</span> | 
    <span className="text-red">red text</span> |
    <span className="text-green">green text</span> | 
    <span className="text-yellow">yellow text</span> | 
    <span className="text-purple">purple text</span> | 
    <span className="text-orange">orange text</span> | 
    <span className="text-gray">gray text</span>

    <br/>

    <span className="bg-primary text-white">bg primary</span> |
    <span className="bg-secondary text-white">bg secondary</span> |
    <span className="bg-error text-white">bg error</span> |
    <span className="bg-info text-white">bg info</span> |
    <span className="bg-blue text-white">bg blue</span> |
    <span className="bg-red text-white">bg red</span> |
    <span className="bg-green text-white">bg green</span> |
    <span className="bg-yellow text-white">bg yellow</span> |
    <span className="bg-purple text-white">bg purple</span> |
    <span className="bg-orange text-white">bg orange</span> |
    <span className="bg-gray text-white">bg gray</span> |

    <br/>

    <span className="bg-primary-dark-8 text-white">primary dark 8</span> |
    <span className="bg-primary-dark-6 text-white">primary dark 6</span> |
    <span className="bg-primary-dark-4 text-white">primary dark 4</span> |
    <span className="bg-primary-dark-2 text-white">primary dark 2</span> |
    <span className="bg-primary text-white">primary</span> |
    <span className="bg-primary-light-2 text-white">primary light 2</span> |
    <span className="bg-primary-light-4 text-white">primary light 4</span> |
    <span className="bg-primary-light-6 text-white">primary light 6</span> |
    <span className="bg-primary-light-8 text-white">primary light 8</span> |


    <br/>
    <a href='#/' className='text-primary text-hover-orange-light-1'>Hover Me</a>

        <hr className="mt-4 mb-4"/>

{/* font sizes */}
    <h2 className="mb-2">Font Sizes</h2>
    <div className="font-sm">this is small font</div>
    <div className="font-md">this is medium font</div>
    <div className="font-lg">this is large font</div>
    <div className="font-xl">this is extra large font</div>
    <div className="font-xxl">this is extra, extra large font</div>

    <hr className="mt-4 mb-4"/>
{/* buttons */}

<h2>Buttons</h2>
    <a href="#/" className="btn">default btn</a>
    <a href="#/" className="btn-primary text-white">click me</a>
    <a href="#/" className="btn-secondary text-white">click me</a>
    <a href="#/" className="btn-error text-white">click me</a>
    <a href="#/" className="btn-info">click me</a>
    <a href="#/" className="btn-outlined-purple text-purple text-hover-white">click me</a>
    <a href="#/" className="btn-outlined-orange text-orange text-hover-white">click me</a>
    <a href="#/" className="btn-complement-purple">click me</a>
    <a href="#/" className="btn-complement-primary">click me</a>

    <hr className="mt-4 mb-4"/>


{/* cards */}
<h2>Card</h2>
<div className="card">
  <h1 className='card-title'>This is a card title</h1>
  <p className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus pretium vehicula. In odio lacus, posuere venenatis urna in, feugiat vehicula urna. Nullam feugiat augue non elit dapibus, vel bibendum elit sagittis. Pellentesque sagittis lacus sed nisi feugiat congue. In in cursus leo. Nam vel rhoncus turpis. Duis in neque rutrum, euismod nisl ut, eleifend erat. </p>
</div>

{/* grid system */}
<div className="responsive-test">changing colors</div>
<h2 className="mb-2">Grid System</h2>
<div className="row gap-2 justify-center">
  <div className="col-12-xs col-5-sm col-3-xl">
    <div className="card">
      <h3 className="card-title">Hello, ninjas</h3>
      <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  <div className="col-12-xs col-5-sm col-3-xl">
    <div className="card">
      <h3 className="card-title">Hello, ninjas</h3>
      <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  <div className="col-12-xs col-5-sm col-3-xl">
    <div className="card">
      <h3 className="card-title">Hello, ninjas</h3>
      <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  <div className="col-12-xs col-5-sm col-3-xl">
    <div className="card">
      <h3 className="card-title">Hello, ninjas</h3>
      <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</div>

<hr className="mt-4 mb-4"/>
{/* utilities */}
<hr className="mt-4 mb-4"/>
    <h2>Using Utilities</h2>
    <div className="mt-2 text-orange-dark-2 bg-orange-light-5 p-2 br-xs">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis!</p>
    </div>
    <div className="mt-2 text-secondary-dark-2 bg-secondary-light-5 p-2 br-lg">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis!</p>
    </div>
    <div className="display-i-b bg-purple text-white o-10 mt-3 mr-3 p-2">opacity 10</div>
    <div className="display-i-b bg-purple text-white o-30 mt-3 mr-3 p-2">opacity 30</div>
    <div className="display-i-b bg-purple text-white o-50 mt-3 mr-3 p-2">opacity 50</div>
    <div className="display-i-b bg-purple text-white o-70 mt-3 mr-3 p-2">opacity 70</div>
    <div className="display-i-b bg-purple text-white o-90 mt-3 mr-3 p-2">opacity 90</div>


</div>
  {/* <!-- footer --> */}
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


</Sidebar>
    </div>
    
    
  );
}

export default App;
