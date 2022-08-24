import './App.css';
import Modal from './Components/Modal/modal';
import Sidebar from './Components/Sidebar1/Sidebar';
import { ProfileInfo } from './Components/Sidebar1/SidebarData';
import logo from './Portrait1.png';
import About from './Components/About/About';
import School from './Components/School/School';
import Work from './Components/Project/Project';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">

<Sidebar>
  

  {/* <!-- intro --> */}
  <div className="container mt-5" id="home">
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

<About/>

  {/* <!-- work section --> */}
 <Work/>


  <School/>

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
<Footer/>


</Sidebar>
    </div>
    
    
  );
}

export default App;
