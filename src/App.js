import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Arweave from "arweave";
export const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https"
});

function App() {
  useEffect(() => {
    const txId = "PNZ8rrBmuxmtpdcqIh9N8DFWV3xpiScT2lYldn_euaI";

    const run = async () => {
      // Interact with Arweave
      try {
        const data = await arweave.transactions.getData(txId, {
          decode: true,
          string: true
        });

        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    run();
  }, []);

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
