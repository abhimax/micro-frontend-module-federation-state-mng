import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";
import { StoreProvider, useStore } from "store/store";
import classes from './home.module.scss';

const App = () => {
  const {count, increment} = useStore();
  return (
    <div className={classes['home-wrapper']}>
      <div>Body from [host]</div>
      <Header/>
      <div className={classes['count-wrapper']}>
        <span>Count: {count}</span>
        <button
          onClick={increment}
          className={classes["count-btn"]}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);