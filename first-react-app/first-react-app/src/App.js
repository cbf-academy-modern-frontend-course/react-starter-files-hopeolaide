import logo from "./logo.svg";
import "./App.css";

function App() {
  const h1Style = { 
    "fontSize":"30px",
    "color": "#cc0000",
    "textTransform": "uppercase"
  };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App">
                    <h1 style={h1Style}> My React Page</h1>
                    <h2 className = "bio">Auithor bio: This is my first React page…</h2>
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
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
