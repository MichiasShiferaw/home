import './App.css';
function App() {
  return (
    <div className="App bg-gray">
      <nav class="navbar justify-between">
        <div class="container">
          <h1 class="site-title">Michias Shiferaw</h1>
          <ul class="display-f">
            <li class="ml-1 text-hover-secondary">
              <a href="#work">Tab1</a>
            </li>
            <li class="ml-1 text-hover-secondary">
              <a href="#about">Tab2</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row justify-center">
          <div className="col-12-xs col-5-md">
            <h2>
              <div className="font-xxl display-f justify-center">Welcome</div>
              <img
                src={`https://MichiasShiferaw.github.io/home/IMG/Pacman/Pacman.png`}
                width="50vw"
                height="50vh"
              />
              <span className="text-pacman">...</span>
              <img
                style={{ transform: "rotateY(180deg)" }}
                src={`https://MichiasShiferaw.github.io/home/IMG/Pacman/Pacman.png`}
                width="50vw"
                height="50vh"
              />
            </h2>
          </div>
          <div className="col-12-xs col-5-md">
            <div className="font-xl text-secondary">
              To The 1980's Inspired Website
            </div>
            <a
              href="https://wwww.michiasshiferaw@github.io"
              rel="noreferrer"
              target="_blank"
              className="btn-outlined-secondary text-secondary text-hover-white"
            >
              View Demo
            </a>
          </div>
        </div>
        <h3 className="pt-3 mb-3">
          Below is a demo of the available components
        </h3>
      </div>

      <div className="container pt-3 ">
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
        <br />
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
        <br />
        <span className="bg-primary-dark-8 text-white">primary dark 8</span> |
        <span className="bg-primary-dark-6 text-white">primary dark 6</span> |
        <span className="bg-primary-dark-4 text-white">primary dark 4</span> |
        <span className="bg-primary-dark-2 text-white">primary dark 2</span> |
        <span className="bg-primary text-white">primary</span> |
        <span className="bg-primary-light-2 text-white">primary light 2</span> |
        <span className="bg-primary-light-4 text-white">primary light 4</span> |
        <span className="bg-primary-light-6 text-white">primary light 6</span> |
        <span className="bg-primary-light-8 text-white">primary light 8</span> |
        <br />
        <a href="#/" className="text-primary text-hover-orange-light-1">
          Hover Me
        </a>
        <hr className="mt-4 mb-4" />
        {/* font sizes */}
        <h2 className="mb-2">Font Sizes</h2>
        <div className="font-sm">this is small font</div>
        <div className="font-md">this is medium font</div>
        <div className="font-lg">this is large font</div>
        <div className="font-xl">this is extra large font</div>
        <div className="font-xxl">this is extra, extra large font</div>
        <hr className="mt-4 mb-4" />
        {/* buttons */}
        <h2>Buttons</h2>
        <a href="#/" className="btn">
          default btn
        </a>
        <a href="#/" className="btn-primary text-white">
          click me
        </a>
        <a href="#/" className="btn-secondary text-white">
          click me
        </a>
        <a href="#/" className="btn-error text-white">
          click me
        </a>
        <a href="#/" className="btn-info">
          click me
        </a>
        <a
          href="#/"
          className="btn-outlined-purple text-purple text-hover-white"
        >
          click me
        </a>
        <a
          href="#/"
          className="btn-outlined-orange text-orange text-hover-white"
        >
          click me
        </a>
        <a href="#/" className="btn-complement-purple">
          click me
        </a>
        <a href="#/" className="btn-complement-primary">
          click me
        </a>
        <hr className="mt-4 mb-4" />
        {/* cards */}
        <h2>Card</h2>
        <div className="card">
          <h1 className="card-title">This is a card title</h1>
          <p className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            faucibus pretium vehicula. In odio lacus, posuere venenatis urna in,
            feugiat vehicula urna. Nullam feugiat augue non elit dapibus, vel
            bibendum elit sagittis. Pellentesque sagittis lacus sed nisi feugiat
            congue. In in cursus leo. Nam vel rhoncus turpis. Duis in neque
            rutrum, euismod nisl ut, eleifend erat.{" "}
          </p>
        </div>
        {/* grid system */}
        <div className="responsive-test">changing colors</div>
        <h2 className="mb-2">Grid System</h2>
        <div className="row gap-2 justify-center">
          <div className="col-12-xs col-5-sm col-3-xl">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-12-xs col-5-sm col-3-xl">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-12-xs col-5-sm col-3-xl">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-12-xs col-5-sm col-3-xl">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        {/* utilities */}
        <hr className="mt-4 mb-4" />
        <h2>Using Utilities</h2>
        <div className="mt-2 text-orange-dark-2 bg-orange-light-5 p-2 br-xs">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            perspiciatis!
          </p>
        </div>
        <div className="mt-2 text-secondary-dark-2 bg-secondary-light-5 p-2 br-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            perspiciatis!
          </p>
        </div>
        <div className="display-i-b bg-purple text-white o-10 mt-3 mr-3 p-2">
          opacity 10
        </div>
        <div className="display-i-b bg-purple text-white o-30 mt-3 mr-3 p-2">
          opacity 30
        </div>
        <div className="display-i-b bg-purple text-white o-50 mt-3 mr-3 p-2">
          opacity 50
        </div>
        <div className="display-i-b bg-purple text-white o-70 mt-3 mr-3 p-2">
          opacity 70
        </div>
        <div className="display-i-b bg-purple text-white o-90 mt-3 mr-3 p-2">
          opacity 90
        </div>
      </div>
      <footer className="bg-gray-light-7 pt-3 pb-3 mt-5">
        <div className="container">copyright 2022 Michias Shiferaw</div>
      </footer>
    </div>
  );
}

export default App;
