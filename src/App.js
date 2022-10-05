import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Autoupdater Demo v 0.1.3</p>
        <h1>This is the newest update with manual update query</h1>
      </header>
    </div>
  );
}

export default App;
