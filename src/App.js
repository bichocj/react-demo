import logo from './logo.svg';
import './App.css';

function App() {
  const appServer = process.env.REACT_APP_SERVER;
  const appEnv = process.env.REACT_APP_ENV;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with bicho!
        </a>
        <pre>
          {appEnv}
        </pre>        
        <pre>
          {appServer}
        </pre>
      </header>
    </div>
  );
}

export default App;
