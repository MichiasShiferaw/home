import logo from './logo.svg';
import './App.css';
import Modal from './Components/Modal/modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>Prep for Github Website</p>


{/* colors */}

<h2>Colors</h2>
    <span class="text-primary">primary text</span> | 
    <span class="text-secondary">secondary text</span> | 
    <span class="text-error">error text</span> | 
    <span class="text-info">info text</span> | 
    <span class="text-blue">blue text</span> | 
    <span class="text-red">red text</span> |
    <span class="text-green">green text</span> | 
    <span class="text-yellow">yellow text</span> | 
    <span class="text-purple">purple text</span> | 
    <span class="text-orange">orange text</span> | 
    <span class="text-gray">gray text</span>

    <br/>

    <span class="bg-primary text-white">bg primary</span> |
    <span class="bg-secondary text-white">bg secondary</span> |
    <span class="bg-error text-white">bg error</span> |
    <span class="bg-info text-white">bg info</span> |
    <span class="bg-blue text-white">bg blue</span> |
    <span class="bg-red text-white">bg red</span> |
    <span class="bg-green text-white">bg green</span> |
    <span class="bg-yellow text-white">bg yellow</span> |
    <span class="bg-purple text-white">bg purple</span> |
    <span class="bg-orange text-white">bg orange</span> |
    <span class="bg-gray text-white">bg gray</span> |

    <br/>

    <span class="bg-primary-dark-8 text-white">primary dark 8</span> |
    <span class="bg-primary-dark-6 text-white">primary dark 6</span> |
    <span class="bg-primary-dark-4 text-white">primary dark 4</span> |
    <span class="bg-primary-dark-2 text-white">primary dark 2</span> |
    <span class="bg-primary text-white">primary</span> |
    <span class="bg-primary-light-2 text-white">primary light 2</span> |
    <span class="bg-primary-light-4 text-white">primary light 4</span> |
    <span class="bg-primary-light-6 text-white">primary light 6</span> |
    <span class="bg-primary-light-8 text-white">primary light 8</span> |


    <br/>
    <a href='#/' className='text-primary text-hover-orange-light-1'>Hover Me</a>

        <hr class="mt-4 mb-4"/>

{/* font sizes */}
    <h2 class="mb-2">Font Sizes</h2>
    <div class="font-sm">this is small font</div>
    <div class="font-md">this is medium font</div>
    <div class="font-lg">this is large font</div>
    <div class="font-xl">this is extra large font</div>
    <div class="font-xxl">this is extra, extra large font</div>

    <hr class="mt-4 mb-4"/>
{/* buttons */}

<h2>Buttons</h2>
    <a href="#/" class="btn">default btn</a>
    <a href="#/" class="btn-primary text-white">click me</a>
    <a href="#/" class="btn-secondary text-white">click me</a>
    <a href="#/" class="btn-error text-white">click me</a>
    <a href="#/" class="btn-info">click me</a>
    <a href="#/" class="btn-outlined-purple text-purple text-hover-white">click me</a>
    <a href="#/" class="btn-outlined-orange text-orange text-hover-white">click me</a>
    <a href="#/" class="btn-complement-purple">click me</a>
    <a href="#/" class="btn-complement-primary">click me</a>

    <hr class="mt-4 mb-4"/>


{/* cards */}
<h2>Card</h2>
<div className="card">
  <h1 className='card-title'>This is a card title</h1>
  <p className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus pretium vehicula. In odio lacus, posuere venenatis urna in, feugiat vehicula urna. Nullam feugiat augue non elit dapibus, vel bibendum elit sagittis. Pellentesque sagittis lacus sed nisi feugiat congue. In in cursus leo. Nam vel rhoncus turpis. Duis in neque rutrum, euismod nisl ut, eleifend erat. </p>
</div>

{/* grid system */}
<div class="responsive-test">changing colors</div>

<hr class="mt-4 mb-4"/>
{/* utilities */}
<hr class="mt-4 mb-4"/>


      </header>
      {/* <Modal/> */}
    </div>
  );
}

export default App;