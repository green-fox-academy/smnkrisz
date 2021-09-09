import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './index.css';




function GoldenAcorn() {

  const [button, setButton] = useState(0);

  const eatOne = () => setButton(prevValue => prevValue - 1);
  const buyOne = () => setButton(prevValue => prevValue + 1);

  const firstValue = button === 0;

  const onKeyPressed = (e) => {
    if (e.key === "ArrowUp") {
      buyOne()
    }
    if (e.key === "ArrowDown") {
      if (button !== 0)
        eatOne()
    }
  }

  useEffect(() => {

    window.addEventListener("keydown", onKeyPressed);
    return () => {
      window.removeEventListener("keydown", onKeyPressed)
    }
  });

  return (
    <div>
      <a href="http://localhost:3000/">Home page</a>
      <a href="http://localhost:3000/simple/states/">With states</a>
      <h1>Golder Acorn application with states</h1>
      <button onClick={buyOne}>Buy one</button>
      <span>{button}</span>
      <button onClick={eatOne} disabled={firstValue}>Eat one</button>

    </div>
  );
}

function Home(props) {
  return (
    <div>
      <a href="http://localhost:3000/">Home page</a>
      <a href="http://localhost:3000/simple/states/">With states</a>
      <h1>Golden Acorn is life! 🌰</h1>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Route exact path='/' component={Home} />
    <Route path='/simple/states/' component={GoldenAcorn} />
  </Router>,
  document.getElementById('app')
);