import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
function App() {
  return (
    <div className="App">
       <h1 className="title">22100582's homepage</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Hello />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
