import './App.css';
import { useState, useEffect } from "react";
import dollar from "./dollar.svg"
import Cat from './Cat';

function App() {

  const [myAdvice, setMyAdvice] = useState("");
  const [myPrice, setMyPrice] = useState("");

    const getAdvice = async () => {
      const response = await fetch("https://www.boredapi.com/api/activity");
      const data = await response.json();
      setMyAdvice(data.activity);
      setMyPrice(data.price);
    }

  useEffect( () => {
    getAdvice()
  }, []);

  return (
    <div className="App">

      <div className="main">

        <div className="container bigger-margin">
          <h1>Bored? Don't be!</h1>
          <h2>Today you can...</h2>
          <p className="advice">{myAdvice}</p>
          <img src={dollar} width="50px" alt="dollar-coin"/>
          <p className="price">It will cost you... {(myPrice === 0) ? "nothing!" : `${myPrice*50} dollars!`}</p>
        </div>

        <div className='container'>
          <button onClick={getAdvice}>New Tip</button>
        </div>

      </div>

      <Cat/>

    </div>
  );
}

export default App;

