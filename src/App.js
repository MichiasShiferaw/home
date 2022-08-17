import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>Prep for Github Website</p>
       <h1><a>Hello</a></h1>
       <h1>This is an h1</h1>
       <a href='#/'>Anchor tag</a>
       <p className='error'>Error paragraph</p>
       <p className='notification'>this is notification</p>
      </header>
    </div>
  );
}

export default App;
