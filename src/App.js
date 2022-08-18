import logo from './logo.svg';
import './App.css';
import Modal from './Components/Modal/modal';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>Prep for Github Website</p> */}


{/* colors */}
 {/* <!-- navbar --> */}
  <nav class="navbar justify-between">
    <div class="container">
      <h1 class="site-title">Shinobi Designs</h1>
      <ul class="display-f">
        <li class="ml-1 text-hover-secondary"><a href="#work">Our Work</a></li>
        <li class="ml-1 text-hover-secondary"><a href="#about">About Us</a></li>
      </ul>
    </div>
  </nav>

  {/* <!-- intro --> */}
  <div class="container mt-5">
    <div class="row justify-center">
      <div class="col-12-xs col-5-md">
        <h2>
          <div class="font-xxl">Black-Belt</div>
          <div class="font-xxl text-secondary">Your Website</div>
        </h2>
        <p class="text-gray mt-2 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="#work" class="btn-outlined-secondary text-secondary text-hover-white">View Our Work</a>
      </div>
      <div class="col-12-xs col-5-md">
        <img src="/img/laptop.svg" alt=""/>
      </div>
    </div>
  </div>

  {/* <!-- about --> */}
  <section id="about" class="bg-secondary-light-9 mt-5 pt-4 pb-4">
    <div class="container">
      <h2 class="mb-2">About Shinobi Designs</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam animi aliquid sequi fuga, nam nesciunt dolore libero dolorem exercitationem aliquam cupiditate atque illo, quae dicta doloribus et? Ab ipsam inventore quam asperiores, sequi unde tenetur accusamus, distinctio magni necessitatibus quis deserunt id alias. Iste eum ea labore rerum voluptatibus.</p>
      <p class="mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nam, corrupti dolorum inventore perspiciatis id illum repellat iste amet sapiente ducimus nihil molestias quasi, totam, ratione minima molestiae blanditiis iure consequatur praesentium debitis. Nulla maiores doloremque tempore nobis dolorum amet!</p>
    </div>
  </section>

  {/* <!-- work section --> */}
  <section id="work" class="mt-5">
    <div class="container">
      <h2 class="mb-2">Some of Our Work</h2>
      <div class="row gap-2">
        <div class="col-12-xs col-6-md col-3-lg">
          <div class="card p-0">
            <h3 class="card-title m-1">
              Mario Club <span class="badge-orange text-white ml-1">new</span>
            </h3>
            <img src="/img/mario.png" alt=""/>
            <p class="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
        <div class="col-12-xs col-6-md col-3-lg">
          <div class="card p-0">
            <h3 class="card-title m-1">Ninja Food</h3>
            <img src="/img/food.png" alt=""/>
            <p class="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
        <div class="col-12-xs col-6-md col-3-lg">
          <div class="card p-0">
            <h3 class="card-title m-1">Just Add Marmite</h3>
            <img src="/img/marmite.png" alt=""/>
            <p class="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
        <div class="col-12-xs col-6-md col-3-lg">
          <div class="card p-0">
            <h3 class="card-title m-1">Ninja Notes</h3>
            <img src="/img/notes.png" alt=""/>
            <p class="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
          </div>
        </div>
      </div>
      <div class="row justify-center mt-2">
        <button class="btn-secondary text-white font-md">View All</button>
      </div>
    </div>
  </section>


  <div class="container">

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
<h2 class="mb-2">Grid System</h2>
<div class="row gap-2 justify-center">
  <div class="col-12-xs col-5-sm col-3-xl">
    <div class="card">
      <h3 class="card-title">Hello, ninjas</h3>
      <p class="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  <div class="col-12-xs col-5-sm col-3-xl">
    <div class="card">
      <h3 class="card-title">Hello, ninjas</h3>
      <p class="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  <div class="col-12-xs col-5-sm col-3-xl">
    <div class="card">
      <h3 class="card-title">Hello, ninjas</h3>
      <p class="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  <div class="col-12-xs col-5-sm col-3-xl">
    <div class="card">
      <h3 class="card-title">Hello, ninjas</h3>
      <p class="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</div>

<hr class="mt-4 mb-4"/>
{/* utilities */}
<hr class="mt-4 mb-4"/>
    <h2>Using Utilities</h2>
    <div class="mt-2 text-orange-dark-2 bg-orange-light-5 p-2 br-xs">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis!</p>
    </div>
    <div class="mt-2 text-secondary-dark-2 bg-secondary-light-5 p-2 br-lg">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis!</p>
    </div>
    <div class="display-i-b bg-purple text-white o-10 mt-3 mr-3 p-2">opacity 10</div>
    <div class="display-i-b bg-purple text-white o-30 mt-3 mr-3 p-2">opacity 30</div>
    <div class="display-i-b bg-purple text-white o-50 mt-3 mr-3 p-2">opacity 50</div>
    <div class="display-i-b bg-purple text-white o-70 mt-3 mr-3 p-2">opacity 70</div>
    <div class="display-i-b bg-purple text-white o-90 mt-3 mr-3 p-2">opacity 90</div>


</div>
  {/* <!-- footer --> */}
  <footer class="bg-gray-light-7 pt-3 pb-3 mt-5">
    <div class="container">
      copyright 2021 Shinobi Designs
    </div>
  </footer>
      {/* </header> */}
      {/* <Modal/> */}
    </div>
    
  );
}

export default App;
