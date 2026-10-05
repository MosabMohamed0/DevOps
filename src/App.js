import logo from "./logo.svg";
import "./App.css";
//csas
// This is a simple React component that renders a header with a logo, some text, and a link to the React documentation. The component is exported as the default export of the module, allowing it to be imported and used in other parts of the application.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Mosab Mohamed</p>
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
