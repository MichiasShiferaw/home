import './App.css';
import Modal from './Components/Modal/modal';
import Sidebar from './Components/Sidebar1/Sidebar';
import { ProfileInfo } from './Components/Sidebar1/SidebarData';
import logo from './Portrait1.png';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
// import Work from './Components/SchoolWork/WorkData';
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">

<Sidebar>
  
  <div className="container mt-5" id="Home">
    <div className="row justify-center">
      
      <div className="col-12-xs col-9-md">
        
        <p className="text-gray mb-2"> Hi</p>
        
        <h2>
          
          <div className="font-xxl">Michias Shiferaw</div>
          <div className="font-xl text-secondary">Developer</div>
        </h2>
        <p className="text-gray mt-2 mb-3">Welcome to my Website!</p>
        <a href="#Project" className="btn-outlined-secondary text-secondary text-hover-white">View My Work</a>
      </div>
      <div id="mylogo1"className="col-12-xs col- col-3-md ">
        <img src={logo} alt=""/>
      </div>
    </div>
  </div>

<About/>
   <Experience/>
 <Project/>

  <Contact/>


<Footer/>


</Sidebar>
    </div>
    
    
  );
}

export default App;
