import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";
import { CountProvider, useCount } from "host/store";
import "./index.scss";

const App = () => {
  const [count, setCount] = useCount();
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header onClear={()=>setCount(0)}/>
      <div>Name: host</div>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("app")
);